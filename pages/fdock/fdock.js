import loadHdrFtr from "../../jsglobal/load-hdr-ftr.js";
import loadComponent from "../../jsglobal/load-component.js";

// Load header & footer
loadHdrFtr();

// Load page main components
const components = {
  perf: "components/perfcalc/perfcalc.html",
  "wgt-tbl": "components/wgt-tbl/wgt-tbl.html",
  dkt: "components/docket/docket.html",
};

for (const [targetId, componentPath] of Object.entries(components)) {
  loadComponent(targetId, componentPath);
}
