// Photos live in src/assets/images as <id>-md.jpg (grids) and <id>-lg.jpg (hero and lightbox).
const files = import.meta.glob('../assets/images/*.jpg', { eager: true, import: 'default' });
const dims = {
  '01': [720, 480, 1400, 933], '02': [520, 780, 1000, 1500], '03': [520, 779, 1000, 1498], '04': [520, 780, 1000, 1500],
  '05': [520, 780, 1000, 1500], '06': [520, 780, 1000, 1500], '07': [520, 650, 1000, 1250], '10': [520, 780, 1000, 1500],
  '11': [520, 761, 1000, 1464], '12': [720, 480, 1400, 933], '13': [720, 480, 1400, 933], '14': [720, 480, 1400, 933],
};
export const photo = (id) => {
  const [mw, mh, lw, lh] = dims[id];
  return { md: files[`../assets/images/${id}-md.jpg`], lg: files[`../assets/images/${id}-lg.jpg`], mw, mh, lw, lh };
};
