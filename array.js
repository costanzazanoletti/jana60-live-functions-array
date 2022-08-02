const cats = [
  {
    name: 'Tom',
    color: 'Gray',
  },
  {
    name: 'Felix',
    color: 'Black and White',
  },
  {
    name: 'Garfield',
    color: 'Orange',
  },
];

// for (let i = 0; i < cats.length; i++) {
//   console.log('name: ' + cats[i].name + ' color: ' + cats[i].color);
// }

cats.forEach((el, index) => {
  console.log('name: ' + el.name + ' color: ' + el.color);
  console.log(index);
});

const numeri = [2, 55, 6, 6, 77];
let sum = 0;
numeri.forEach((el) => {
  sum += el;
});
console.log(sum);

const pari = numeri.filter((n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(numeri);
console.log(pari);
