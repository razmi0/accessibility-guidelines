//@ts-check
// Description: This file contains helper functions and constants used in the project.
//
export const TITLES = {
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

const handleIntersection = (entries, options) => {
  const { onIntersect, onDisappear } = options;
  entries.forEach((entry) => (entry.isIntersecting ? onIntersect() : onDisappear()));
};

export const setupIntersectionObserver = (
  element,
  { threshold = 0.9, onIntersect = () => {}, onDisappear = () => {} }
) => {
  const options = { onIntersect, onDisappear };
  const observer = new IntersectionObserver((entry) => handleIntersection(entry, options), {
    threshold: threshold,
  });

  observer.observe(element);
};
