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
