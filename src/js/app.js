import diners from '../img/diners.png';
import amex from '../img/amex.png';
import jcb from '../img/jcb.png';
import visa from '../img/visa.png';
import electron from '../img/electron.png';
import maestro from '../img/maestro.png';
import mastercard from '../img/mastercard.png';
import discover from '../img/discover.png';
import mir from '../img/mir.png';
/* eslint-disable no-cond-assign */
function displayResult(cardType) {
  // const urlImg = `../img/${cardType}.png`;
  console.log(cardType);
  document.querySelector('.img-card').src = `("${cardType}")`;
}

function moonAlgorithm(num) {
  let ch = 0;
  const isOdd = num.length % 2 !== 0;

  if (num === '') return false;

  for (let i = 0; i < num.length; i += 1) {
    let n = parseInt(num[i], 10);

    ch += (isOdd || 0) === i % 2 && (n *= 2) > 9 ? n - 9 : n;
  }

  return ch % 10 === 0;
}

function detectCardType(num) {
  const re = {
    electron: { maska: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/, type: electron },
    maestro: {
      maska:
      /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
      type: maestro,
    },
    visa: { maska: /^4[0-9]{0,}$/, type: visa },
    mastercard: { maska: /^5[1-5][0-9]{14}$/, type: mastercard },
    amex: { maska: /^3[47][0-9]{13}$/, type: amex },
    diners: { maska: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/, type: diners },
    discover: { maska: /^6(?:011|5[0-9]{2})[0-9]{12}$/, type: discover },
    jcb: { maska: /^(?:2131|1800|35\d{3})\d{11}$/, type: jcb },
    mir: { maska: /^2[0-9]{0,}/, type: mir },
  };

  for (const key in re) {
    if (re[key].maska.test(num)) {
      return re[key].type;
    }
  }
  return undefined;
}

function checkStart(num) {
  const cardType = detectCardType(num);
  if (moonAlgorithm(num)) {
    displayResult(cardType);
  }
}

const btn = document.getElementById('checkStart');
const input = document.getElementById('cardNumber');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value.length === 0) {
    return;
  }
  checkStart(String(input.value).replace(/\D/g, ''));
});
