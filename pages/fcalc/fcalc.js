import loadHdrFtr from "../../jsglobal/load-hdr-ftr.js";
import loadComponent from "../../jsglobal/load-component.js";

// Load header & footer
loadHdrFtr();

// Load page main components
const components = {
  "flt-sel": "components/flt-sel/flt-sel.html",
  "repl": "components/fcalctbl/fcalctbl.html",
};

for (const [targetId, componentPath] of Object.entries(components)) {
  loadComponent(targetId, componentPath);
}
