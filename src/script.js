const ts = {
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
  },
  dt = document.querySelector("#document-title");
if (!dt) throw Error("Document title element not found");
const handleIntersection = (e, t) => {
    let { onIntersect: i, onDisappear: o } = t;
    e.forEach((e) => (e.isIntersecting ? i() : o()));
  },
  voidCb = () => {},
  setupIntersectionObserver = (e, { threshold: t = 0.9, onIntersect: i = voidCb, onDisappear: o = voidCb }) => {
    let n = { onIntersect: i, onDisappear: o },
      s = new IntersectionObserver((e) => handleIntersection(e, n), { threshold: t });
    s.observe(e);
  };
Object.values(ts).forEach((e) => {
  setupIntersectionObserver(document.querySelector(`#${e.selector}`), {
    onIntersect: () => (dt.textContent = "header-page-top" === e.selector ? e.title : `Guidelines -/- ${e.title}`),
  });
});
