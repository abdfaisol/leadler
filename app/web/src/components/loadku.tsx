/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";

export default ({ children }) => {
  const _component = useComponent("loadku","/app/web/src/components/loadku",{});
  return eval(_component.render)
}