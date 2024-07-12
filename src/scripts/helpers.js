//@ts-check
export const ts = {
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

const hI = (e, t) => {
  let { onIntersect: o, onDisappear: i } = t;
  e.forEach((e) => (e.isIntersecting ? o() : i()));
};

export const setupIntersectionObserver = (
  e,
  { threshold: t = 0.9, onIntersect: o = () => {}, onDisappear: i = () => {} }
) => {
  let n = { onIntersect: o, onDisappear: i };
  new IntersectionObserver((e) => hI(e, n), { threshold: t }).observe(e);
};
