import loadComponent from "./load-component.js";

function loadHdrFtr() {
  (async () => {
    await Promise.all([loadComponent("hdr", "components/shared/hdr/hdr.html"), loadComponent("ftr", "components/shared/ftr/ftr.html")]);

    /* Insert current year */
    document.getElementById("yr").innerHTML = new Date().getFullYear();
  })();
}

export default loadHdrFtr;
