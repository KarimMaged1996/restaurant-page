export default function createMenus() {
  let menu = document.createElement('div');
  menu.classList.add('menu', 'remove');

  let mainDish = document.createElement('div');
  mainDish.classList.add('mainDish');
  let one = document.createElement('h2');
  let two = document.createElement('div');
  let three = document.createElement('div');
  let four = document.createElement('div');
  let five = document.createElement('div');
  let six = document.createElement('br');
  let seven = document.createElement('h2');
  let eight = document.createElement('div');
  let nine = document.createElement('div');
  let ten = document.createElement('br');
  let eleven = document.createElement('h2');
  let twelve = document.createElement('div');
  let thirteen = document.createElement('div');
  let fourteen = document.createElement('div');
  let fifteen = document.createElement('div');
  let sixteen = document.createElement('div');
  let seventeen = document.createElement('div');
  let eighteen = document.createElement('div');
  let nineteen = document.createElement('div');
  let twenty = document.createElement('div');
  let twentyOne = document.createElement('div');
  one.textContent = 'Nigiri';
  two.textContent = 'Salmon........ 30 EGP';
  three.textContent = 'Tuna.......... 30 EGP';
  four.textContent = 'Crab.......... 22 EGP';
  five.textContent = 'Shrimp........ 28 EGP';
  seven.textContent = 'Sashimi';
  eight.textContent = 'Salmon........ 93 EGP';
  nine.textContent = 'Tuna.......... 92 EGP';
  eleven.textContent = 'Special Rolls';
  twelve.textContent = 'Philadelphia Roll........ 100 EGP';
  thirteen.textContent = 'California Roll.......... 120 EGP';
  fourteen.textContent = 'Phily Shrimp............. 160 EGP';
  fifteen.textContent = 'Beast Roll............... 150 EGP';
  sixteen.textContent = 'Crispy Roll.............. 135 EGP';
  seventeen.textContent = 'Power Roll............... 120 EGP';
  eighteen.textContent = 'Hawai Roll............... 140 EGP';
  nineteen.textContent = 'Spider Roll.............. 125 EGP';
  twenty.textContent = 'Sushimi Lemon Roll....... 100 EGP';
  twentyOne.textContent = 'Volcano Roll............. 135 EGP';
  mainDish.append(
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twentyOne
  );

  let desserts = document.createElement('div');
  desserts.classList.add('desserts');
  let a = document.createElement('h2');
  let b = document.createElement('div');
  let c = document.createElement('div');
  let d = document.createElement('div');
  let e = document.createElement('div');
  let f = document.createElement('div');
  let g = document.createElement('div');
  let h = document.createElement('div');
  let i = document.createElement('br');
  let j = document.createElement('h2');
  let k = document.createElement('div');
  let l = document.createElement('div');
  let m = document.createElement('div');
  let n = document.createElement('div');
  let o = document.createElement('div');
  let p = document.createElement('div');
  let q = document.createElement('div');
  a.textContent = 'Drinks';
  b.textContent = 'Lemon Squash......... 50 EGP';
  c.textContent = 'Blue Ocean Squash.... 70 EGP';
  d.textContent = 'Fruity Milk Shake.... 60 EGP';
  e.textContent = 'Cofee Latte.......... 50 EGP';
  f.textContent = 'Tea Latte............ 40 EGP';
  g.textContent = 'Grean Tea............ 40 EGP';
  h.textContent = 'Milky Ginger......... 50 EGP';
  j.textContent = 'Desserts';
  k.textContent = 'Guava Silky Pudding......... 90 EGP';
  l.textContent = 'Apple Chocolate Milk........ 85 EGP';
  m.textContent = 'Tiramissu Brownies.......... 95 EGP';
  n.textContent = 'Ice Cream................... 40 EGP';
  o.textContent = 'Fruit Salad................. 40 EGP';
  p.textContent = 'Cheese Cake................. 65 EGP';
  q.textContent = 'Peanut Butter Pie........... 55 EGP';
  desserts.append(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q);

  menu.append(mainDish, desserts);
  return menu;
}
