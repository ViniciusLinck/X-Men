function parseBorderRadius(value) {
  return value && value !== "0px" ? value : "8px";
}

export function buildSharedTransitionPayload(sourceElement, fallbackImageSrc) {
  if (!sourceElement) {
    return null;
  }

  const sourceRoot = sourceElement.closest(".personagem") || sourceElement;
  const sourceImage =
    sourceRoot.querySelector?.("img") || (sourceElement.tagName === "IMG" ? sourceElement : null);

  if (!sourceImage) {
    return null;
  }

  const rect = sourceImage.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return null;
  }

  const computedStyles = window.getComputedStyle(sourceImage);

  return {
    rect: {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    },
    imageSrc: sourceImage.currentSrc || sourceImage.src || fallbackImageSrc,
    borderRadius: parseBorderRadius(computedStyles.borderRadius)
  };
}
