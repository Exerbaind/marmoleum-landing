const width2Price = document.querySelectorAll(".width-2-price");
const width25Price = document.querySelectorAll(".width-25-price");

const width2PriceOld = document.querySelectorAll(".width-2-price-old");
const width25PriceOld = document.querySelectorAll(".width-25-price-old");

const width2Value = 17.8;
const width25Value = 19.4;

const width2ValueOld = 19;
const width25ValueOld = 20.5;

var EURrate;

function CBR_XML_Daily_Ru(rates) {
  EURrate = rates.Valute.EUR.Value.toFixed(0).replace(".", ",");
  width2Price.forEach((price) => {
    price.innerHTML = Math.ceil(EURrate * width2Value);
  });
  width2PriceOld.forEach((price) => {
    price.innerHTML = Math.ceil(EURrate * width2ValueOld);
  });
  width25Price.forEach((price) => {
    price.innerHTML = Math.ceil(EURrate * width25Value);
  });
  width25PriceOld.forEach((price) => {
    price.innerHTML = Math.ceil(EURrate * width25ValueOld);
  });
}
