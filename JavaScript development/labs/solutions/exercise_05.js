let arr = [0, -0, false, undefined, null, NaN, ''];

for (let i = 0; i < arr.length; i++) {
  let waarde = arr[i];
  let uitkomst = +!waarde === 1;
  console.log('waarde ' + waarde + ' levert ' + uitkomst);
}