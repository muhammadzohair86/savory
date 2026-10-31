export const site = {
  name: 'Savory',
  tagline: 'Food photography and styling',
  email: 'hello@savory.example',
};

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const services = [
  {
    id: 'photography', title: 'Food photography', img: '12',
    lead: 'Natural-light images that let the food look like itself.',
    text: 'From a single dish to a full brunch table, every shoot starts with a plan for the light, the angle and the story the picture should tell, then ends with clean, carefully edited files ready to use.',
    includes: ['A moodboard and shot list before the shoot', 'Natural-light photography, overhead and at an angle', 'Colour and tidying edits', 'Web-ready files for print and screen'],
  },
  {
    id: 'styling', title: 'Food styling and props', img: '13',
    lead: 'Plates, surfaces and small details that support the food.',
    text: 'Good styling is mostly restraint. Surfaces, linens and tableware are chosen to flatter the food, and hands in the frame add a sense of someone about to eat.',
    includes: ['Prop and surface selection', 'Lifestyle scenes with hands in the frame', 'Styling on set so food stays fresh', 'Seasonal colour palettes'],
  },
  {
    id: 'recipes', title: 'Recipe and content development', img: '14',
    lead: 'Recipes written for home kitchens, paired with pictures made for the page.',
    text: 'For cookbooks, blogs and brand content, recipes and photography are planned together so the steps, the ingredients and the finished dish all tell the same story.',
    includes: ['Recipe writing with clear method notes', 'Photography to match each recipe', 'Captions and step-by-step guides', 'Seasonal series planning'],
  },
];

export const steps = [
  ['Brief', 'You tell us what you are making, where the images will be used and the mood you have in mind.'],
  ['Plan', 'We agree a shot list, a palette and the props, and choose the best time of day for the light.'],
  ['Shoot', 'A calm, well-prepared session in natural light, with the food styled and shot while it is at its best.'],
  ['Deliver', 'Edited, web-ready images and any agreed extras, organised so they are easy to use.'],
];

export const principles = [
  ['Light first', 'Every picture begins with the window. Soft, directional daylight does most of the work.'],
  ['Real food', 'Crumbs, steam and a slightly torn pancake are welcome. Food should look like something you can eat.'],
  ['Calm styling', 'A few well-chosen objects beat a crowded table. Space around the food is part of the picture.'],
  ['Made to be used', 'Files are prepared for the places they will appear: a menu, a page, a package or a feed.'],
];
