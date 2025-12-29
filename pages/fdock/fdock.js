async function loadComponent(targetId, componentPath) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const root = getAppRoot();
  const url = root + componentPath;

  const response = await fetch(url);
  target.innerHTML = await response.text();
}

loadComponent("wgt-tbl", "components/wgt-tbl/wgt-tbl.html");
loadComponent("dkt", "components/docket/docket.html");