// make sure to export default component not export const
export default {
  "render-html": () => [
    import("web.utils/components/RenderHTML"),
    { c: "", s: "", h: "" },
  ],
  "html-head": () => [
    import("web.utils/components/HtmlHead"),
    { c: "", s: "", h: "" },
  ],
  "hello-world": () => [
    import("web.utils/components/HelloWorld"),
    { c: "", s: "", h: "" },
  ],
  loading: () => [
    import("web.crud/src/legacy/Loading"),
    { c: "", s: "", h: "" },
  ],
  admin: () => [import("web.crud/src/CRUD"), { c: "", s: "", h: "" }],
  qform: () => [import("web.crud/src/form/BaseForm"), { c: "", s: "", h: "" }],
  qlist: () => [import("web.crud/src/list/QBaseList"), { c: "", s: "", h: "" }],
  ficon: () => [import("./components/FluentIcon"), { c: "", s: "", h: "" }],
  faicon: () => [import("./components/FAIcon"), { c: "", s: "", h: "" }],
  qrcode: () => [import("./components/qrcode"), { c: "", s: "", h: "" }],
  dtable: () => [import("./components/DataTable"), { c: "", s: "", h: "" }],
  dropify: () => [import("./components/Dropify"), { c: "", s: "", h: "" }],
  "sample-component": () => [
    import("./components/sample-component"),
    { c: "", s: "", h: "" },
  ],
  test: () => [import("./components/test"), { c: "", s: "", h: "" }],
  multipleselect: () => [
    import("./components/multiple-select"),
    { c: "", s: "", h: "" },
  ],
  testc: () => [import("./components/test"), { c: "", s: "", h: "" }],
  "eye-icon": () => [import("./components/eye-icon"), { c: "", s: "", h: "" }],
  "eye-slash": () => [
    import("./components/eye-slash"),
    { c: "", s: "", h: "" },
  ],
  bar: () => [import("./components/bar"), { c: "", s: "", h: "" }],
  "sidebar-pm": () => [
    import("./components/sidebar-pm"),
    { c: "", s: "", h: "" },
  ],
  showprofile: () => [
    import("./components/showprofile"),
    { c: "", s: "", h: "" },
  ],
  loadku: () => [import("./components/loadku"), { c: "", s: "", h: "" }],
};
