/* eslint-disable no-cond-assign */
function displayResult(cardType) {
  const urlImg = `../img/${cardType}.png`;
  document.querySelector('.img-card').style.backgroundImage = `url("${urlImg}")`;
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
    electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
    maestro:
      /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
    dankort: /^(5019)\d+$/,
    interpayment: /^(636)\d+$/,
    unionpay: /^(62|88)\d+$/,
    visa: /^4[0-9]{0,}$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    mir: /^2[0-9]{0,}/,
  };

  for (const key in re) {
    if (re[key].test(num)) {
      return key;
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
