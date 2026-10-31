export const themes = ['Breakfast & brunch', 'Fruit & berries', 'Baking & roasting', 'Coffee & savory'];

// Captions describe what is visible in each photograph.
export const gallery = [
  { id: '12', theme: 'Fruit & berries', pos: '50% 50%', title: 'Overhead brunch table', alt: 'An overhead table set with halved grapefruit, figs and small plates' },
  { id: '05', theme: 'Breakfast & brunch', pos: '50% 50%', title: 'Fig and kiwi breakfast bowl', alt: 'A bowl of figs, kiwi and berries with a coffee cup, milk jug and spoon on a white table' },
  { id: '13', theme: 'Breakfast & brunch', pos: '50% 50%', title: 'A fruit platter brunch', alt: 'Hands eating from a table spread with a fruit platter, small plates of pancakes and a teapot' },
  { id: '04', theme: 'Breakfast & brunch', pos: '50% 50%', title: 'Raspberry pancake stack', alt: 'A tall stack of pancakes topped with raspberries on a white plate' },
  { id: '07', theme: 'Baking & roasting', pos: '50% 50%', title: 'Red berry tart', alt: 'A red berry tart on a white table with a knife, a bowl of berries and green leaves' },
  { id: '11', theme: 'Baking & roasting', pos: '50% 50%', title: 'Roasted plums', alt: 'Roasted plums with star anise in a white baking dish on a wooden table' },
  { id: '10', theme: 'Coffee & savory', pos: '50% 50%', title: 'Green salad with lemon', alt: 'A plate of green salad with lemon wedges and crisp fillets beside a bottle of sparkling water' },
  { id: '03', theme: 'Coffee & savory', pos: '50% 50%', title: 'Coffee beans and a moka pot', alt: 'Coffee beans spilling from a brown paper bag beside a silver moka pot on marble' },
  { id: '01', theme: 'Breakfast & brunch', pos: '50% 50%', title: 'Berry toast, passed across the table', alt: 'Two hands carrying a white plate with a slice of toast topped with berries' },
  { id: '02', theme: 'Breakfast & brunch', pos: '50% 50%', title: 'Pancakes by the window', alt: 'A short stack of pancakes dusted with sugar on a pale blue plate beside a sunlit window' },
  { id: '06', theme: 'Fruit & berries', pos: '50% 50%', title: 'Fruit bowl and a jug of milk', alt: 'A ramekin of fresh fruit sitting on an oat biscuit beside a small jug of milk' },
  { id: '14', theme: 'Fruit & berries', pos: '50% 50%', title: 'Cherries, a tart and kitchen tools', alt: 'Fresh cherries in a bowl beside a berry tart, a whisk, spoons and an embroidered cloth' },
];

// The eight tiles shown on the home page, in the order of the original template.
export const featured = ['12', '05', '13', '04', '07', '11', '10', '03'].map((id) => gallery.find((g) => g.id === id));
export const byId = (id) => gallery.find((g) => g.id === id);
