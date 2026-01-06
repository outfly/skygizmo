import loadComponent from "../../src/shared/load-component.js";
import loadCore from "../../src/shared/load-core.js";

// Load header & footer
loadCore();

// Load page main components
const components = {
  "perf": "components/perfcalc/perfcalc.html",
  "wgt-tbl": "components/wgt-tbl/wgt-tbl.html",
  "dkt": "components/docket/docket.html",
};

for (const [targetId, componentPath] of Object.entries(components)) {
  loadComponent(targetId, componentPath);
}
