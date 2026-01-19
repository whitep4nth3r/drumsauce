function cleanText(text: string) {
  return encodeURIComponent(text)
    .replace(/%(23|2C|2F|3F|5C)/g, "%25$1")
    .toUpperCase();
}

export function makeOgImageUrl(title: string) {
  const baseTitleSize = 100;
  const cleanTitle = cleanText(title);

  const titleConfig = [
    `w_700`,
    "c_fit",
    "g_east",
    "co_rgb:000000",
    `x_40`,
    `y_0`,
    `l_text:Anton_${baseTitleSize}_right___line_spacing_-50:${cleanTitle}`,
  ].join(",");

  return `https://res.cloudinary.com/whitep4nth3r/image/upload/${titleConfig}/drumsauce_og.png`;
}
