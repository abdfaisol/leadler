/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";

export default ({ children }) => {
  const _component = useComponent("sidebar-pm","/app/web/src/components/sidebar-pm",{});
  return eval(_component.render)
}