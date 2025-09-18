
// task 1
const compareLength = (str, n) => str.length <= n;


// task 2
const checkReverse = (str) => {
  const STR_LOW = str.toLowerCase().replaceAll(' ', '');
  let strReverse = '';
  for (let i = 1; i <= STR_LOW.length; i++) {
    strReverse += STR_LOW[STR_LOW.length - i];
  }
  return STR_LOW === strReverse;
};


// task 3
function findNums(par) {
  const STR = par.toString();
  let res = '';
  for (let i = 0; i < STR.length; i++) {
    if (parseInt(STR[i], 10) === parseInt(STR[i], 10)) {
      res += STR[i];
    }
  }
  return parseInt(res, 10);
}


