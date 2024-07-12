import { TITLES } from "./constants.js";
import { setupIntersectionObserver } from "./intersections.js";
import { ls } from "./storage.js";

// --
// DOM elements
// --

const fontToggler = document.querySelector("#font-toggler");
const documentTitle = document.querySelector("#document-title");

// --
// Error handling
// --

if (!fontToggler) console.error("[Error] : Font toggler element not found");
if (!documentTitle) console.error("[Error] : Document title element not found");

// --
// Local functions & handlers
// --

const toggleFont = () => {
  if (!fontToggler) return;
  fontToggler.checked = !fontToggler.checked;
};

const onDomContentLoaded = () => {
  const fontPreference = ls.load("ACC_GUIDELINE_FONT");
  if (!fontPreference || !fontToggler) return;
  fontPreference === "dyslexia" ? toggleFont() : null;
};

const onIntersect = (title) => {
  documentTitle.textContent = title.selector === "header-page-top" ? title.title : `Guidelines -/- ${title.title}`;
};

// --
// Listeners
// --

Object.values(TITLES).forEach((title) => {
  setupIntersectionObserver(document.querySelector(`#${title.selector}`), { onIntersect: () => onIntersect(title) });
});

fontToggler.addEventListener("change", (e) => {
  ls.save("ACC_GUIDELINE_FONT", e.target.checked ? "dyslexia" : "normal");
});

addEventListener("DOMContentLoaded", onDomContentLoaded);
