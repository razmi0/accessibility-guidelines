export const ls = {
  load: (key) => {
    if (!window) return;
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error(`[ERROR] Unable to load data from localStorage: ${e}`);
      return null;
    }
  },
  save: (key, data) => {
    if (!window) return;
    localStorage.setItem(key, JSON.stringify(data));
  },
};
