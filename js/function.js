
// task 1
const compareLength = (str, n) => str.length <= n;

compareLength(' \\', 5);

// task 2
const checkReverse = (str) => {
  const STR_LOW = str.toLowerCase().replaceAll(' ', '');
  let strReverse = '';
  for (let i = 1; i <= STR_LOW.length; i++) {
    strReverse += STR_LOW[STR_LOW.length - i];
  }
  return STR_LOW === strReverse;
};
checkReverse('00oooTooo  00');

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
findNums('oo00546//.05 et');

//task 5-2

function compareTime(dstart, dend, mstart, mlength) {
  const findTime = (par) => {
    par = par.split(':');
    return +par[0] * 60 + (+par[1]);
  };

  if (findTime(dstart) > findTime(mstart)) {
    return false;
  } else if (findTime(dend) < findTime(mstart) + mlength) {
    return false;
  }
  return true;
}

compareTime('8:00', '10:0', '9:30', 30);
