//@ts-check

const titles = {
  header: { selector: "header-page-top", title: "Accessibility guidelines" },
  webInterface: { selector: "web-interface", title: "Web Interface" },
  interactivity: { selector: "interactivity", title: "Interactivity" },
  typography: { selector: "typography", title: "Typography" },
  motion: { selector: "motion", title: "Motion" },
  touch: { selector: "touch", title: "Touch" },
  optimization: { selector: "optimization", title: "Optimization" },
  accessibility: { selector: "accessibility", title: "Accessibility" },
  design: { selector: "design", title: "Design" },
  footnotes: { selector: "footnotes", title: "Footnotes" },
};

const baseStr = "Guidelines";
const documentTitle = document.querySelector("#document-title");
if (!documentTitle) {
  throw new Error("Document title element not found");
}

const handleIntersection = (entries, options) => {
  const { onIntersect, onDisappear } = options;
  entries.forEach((entry) => (entry.isIntersecting ? onIntersect() : onDisappear()));
};

const voidCb = () => {};
const setupIntersectionObserver = (element, { threshold = 0.9, onIntersect = voidCb, onDisappear = voidCb }) => {
  const options = { onIntersect, onDisappear };
  const observer = new IntersectionObserver((entry) => handleIntersection(entry, options), {
    threshold: threshold,
  });

  observer.observe(element);
};

Object.values(titles).forEach((title) => {
  setupIntersectionObserver(document.querySelector(`#${title.selector}`), {
    onIntersect: () =>
      (documentTitle.textContent =
        // If the user is at the top of the page, show the default title
        title.selector === "header-page-top" ? title.title : `${baseStr} -/- ${title.title}`),
  });
});
