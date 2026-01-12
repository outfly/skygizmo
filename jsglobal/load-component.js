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
  const component = document.getElementById(targetId);
  if (!component) return null;

  // construct a correct path (for localhost and github pages)
  const root = getAppRoot();
  const url = root + componentPath;

  const response = await fetch(url);
  component.innerHTML = await response.text();
}

export default loadComponent;
