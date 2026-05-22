document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const mainImage = gallery.querySelector("[data-gallery-main]");
  const thumbs = gallery.querySelectorAll("[data-image]");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const image = thumb.getAttribute("data-image");
      if (!image || !mainImage) return;

      mainImage.src = image;
      thumbs.forEach((item) => item.classList.remove("is-active"));
      thumb.classList.add("is-active");
    });
  });
});

document.querySelectorAll("[data-unavailable]").forEach((button) => {
  button.addEventListener("click", () => {
    const productArea = button.closest("article") || document;
    const message = productArea.querySelector("[data-unavailable-message]");

    if (message) {
      message.textContent = "Not available yet. This product is still in development.";
    }
  });
});

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}

function loadOptionalImage(source) {
  return new Promise((resolve) => {
    if (!source) {
      resolve(false);
      return;
    }

    const probe = new Image();
    probe.onload = () => resolve(true);
    probe.onerror = () => resolve(false);
    probe.src = source;
  });
}

async function hydrateRenderLibrary() {
  const slots = document.querySelectorAll("[data-render-src]");

  await Promise.all(
    Array.from(slots).map(async (slot) => {
      const source = slot.getAttribute("data-render-src");
      const alt = slot.getAttribute("data-render-alt") || "";
      const media = slot.querySelector(".render-slot-media");

      if (!source || !media) return;

      const exists = await loadOptionalImage(source);
      if (!exists) return;

      const image = document.createElement("img");
      image.src = source;
      image.alt = alt;
      image.loading = "lazy";
      media.replaceChildren(image);
      media.classList.add("has-image");
    }),
  );
}

hydrateRenderLibrary();
