import { setupIntersectionObserver, TITLES } from "./helpers.js";

const documentTitle = document.querySelector("#document-title");
if (!documentTitle) throw Error("Document title element not found");

Object.values(TITLES).forEach((title) => {
  setupIntersectionObserver(document.querySelector(`#${title.selector}`), {
    onIntersect: () =>
      (documentTitle.textContent =
        title.selector === "header-page-top" ? title.title : `Guidelines -/- ${title.title}`),
  });
});
