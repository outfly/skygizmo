import loadComponent from "./load-component.js";

function loadCore() {
  (async () => {
    await Promise.all([loadComponent("hdr", "components/core/hdr.html"), loadComponent("ftr", "components/core/ftr.html")]);

    /* Insert current year */
    document.getElementById("yr").innerHTML = new Date().getFullYear();
  })();
}

export default loadCore;
