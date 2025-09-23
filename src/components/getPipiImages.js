// src/utils/getImages.js
const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context("../assets/img/pipi-pictures", false, /\.(jpe?g|png)$/i)
);

export default images;
