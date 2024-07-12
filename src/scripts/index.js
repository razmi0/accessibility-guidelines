import { setupIntersectionObserver, ts } from "./helpers.js";

const dt = document.querySelector("#document-title");
if (!dt) throw Error("Document title element not found");

Object.values(ts).forEach((e) => {
  setupIntersectionObserver(document.querySelector(`#${e.selector}`), {
    onIntersect: () => (dt.textContent = "header-page-top" === e.selector ? e.title : `Guidelines -/- ${e.title}`),
  });
});
