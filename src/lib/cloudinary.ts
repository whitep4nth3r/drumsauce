function cleanText(text: string) {
  return encodeURIComponent(text)
    .replace(/%(23|2C|2F|3F|5C)/g, "%25$1")
    .toUpperCase();
}

export function makeOgImageUrl(title: string) {
  const baseTitleSize = 20;
  const cleanTitle = cleanText(title);

  const titleConfig = [
    `w_900`,
    "c_fit",
    "g_north_west",
    "co_rgb:ffffff",
    `x_20`,
    `y_20`,
    `l_text:Anton_${baseTitleSize}__line_spacing_-40:${cleanTitle})}`,
  ].join(",");

  return `https://res.cloudinary.com/whitep4nth3r/image/upload/${titleConfig}/drumsauce-og.png`;
}
