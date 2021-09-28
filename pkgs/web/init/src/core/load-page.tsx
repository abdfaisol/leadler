import { matchRoute } from 'libs'
import type { BaseWindow } from '../window'
import get from 'lodash.get'
declare const window: BaseWindow

export const findPage = (url: string) => {
  if (!window.cms_pages) {
    window.cms_pages = {}
    console.warn(`[BASE] Failed to load page for url: ${url} `)
  }


  for (let [k, v] of Object.entries(window.cms_pages)) {
    const params = matchRoute(url, k)

    if (params) {
      return { url: k, ...v, params }
    }
  }

  console.warn(`[BASE] Page not found: ${url}`, window.cms_pages)
  return false
}

export const loadPage = async (found: ReturnType<typeof findPage>) => {
  if (found) {
    let source = window.cms_pages[found.url].source
    if (!source) {
      const ssr = found.ssr
      found.source = await fetchPageById(found.id, {
        ssr: window.pageRendered === undefined ? false : ssr,
      })
      window.cms_pages[found.url].source = source
    }
    return found
  }
  return false
}

export function fetchPageById(
  id: string,
  opt: {
    ssr: boolean
    params?: any
  }
): Promise<string> {
  return new Promise((resolve) => {
    function failureListener(err) {
      console.log('Request failed', err)
    }
    let resolved = false

    if (!window.is_dev && localStorage[`csx-${id}`] && !get(opt, 'ssr')) {
      if (localStorage[`build-id`] !== window.build_id) {
        console.info(
          `[BASE] Build ID mismatch, local (${
            localStorage[`build-id`]
          }) server (${window.build_id}),  clearing cache...`
        )
        for (let i of Object.keys(localStorage)) {
          if (
            i.indexOf('csx-') === 0 ||
            i.indexOf('ccx-') === 0 ||
            i.indexOf('dbdef-') === 0
          ) {
            localStorage.removeItem(i)
          }
        }
        localStorage['build-id'] = window.build_id
      } else {
        resolve(localStorage[`csx-${id}`])
        resolved = true
        return
      }
    }

    var request = new XMLHttpRequest()
    request.onload = function (this: any) {
      localStorage[`csx-${id}`] = this.responseText
      if (!resolved) {
        resolve(this.responseText)
      }
    }

    request.onerror = failureListener
    request.open('post', `/__cms/${id}/${opt.ssr ? 'ssr' : 'page'}.csx`, true)

    request.setRequestHeader('x-cpx-ssr', opt.ssr ? 'yes' : 'no')
    request.setRequestHeader('x-cpx-request', 'yes')
    request.send()
  })
}
