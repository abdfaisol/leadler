/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";

export default ({ children }) => {
  const _component = useComponent("showprofile","/app/web/src/components/showprofile",{});
  return eval(_component.render)
}