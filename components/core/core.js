function getAppRoot() {
  const { origin, pathname } = window.location;

  // GitHub Pages (repo)
  if (origin.includes("github.io")) {
    const repo = pathname.split("/")[1];
    return `${origin}/${repo}/`;
  }

  // Localhost
  return `${origin}/`;
}

async function loadComponent(targetId, componentPath) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const root = getAppRoot();
  const url = root + componentPath;

  const response = await fetch(url);
  target.innerHTML = await response.text();
}

/* Core components (load on every page) */
(async () => {
  await Promise.all([loadComponent("hdr", "components/core/hdr.html"), loadComponent("ftr", "components/core/ftr.html")]);

  /* Insert current year */
  document.getElementById("yr").innerHTML = new Date().getFullYear();
})();
