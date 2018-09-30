//declare default variables
let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let grandmaAuto = false;
//declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

let refreshCookieCount = () => {
  cookieCounter.innerHTML = cookieCount;
};

let refreshPowerClick = () => {
  clickPowerLevel.innterHTML = clickPowerLevelNumber;
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
};

let refreshGrandma = () => {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower;
  grandmaMultiple.innerHTML = grandmaPower - 10;
};

let autoGrandmaStart = () => {
  let grandmaInt = window.setInterval(() => {
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}

cookieClicker.addEventListener('click', () => {
    cookieCount += clickPower;
    refreshCookieCount();
});

buyClickPower.addEventListener("click", () => {
    if (cookieCount >= clickPowerPriceAmount) {
        //subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;
        refreshCookieCount()
        //Upgrade power level
        clickPowerLevelNumber += 1;
        //Update click price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
        //update Click Power
        clickPower += 1;
        //refresh shop item
        refreshPowerClick();
    } else {
        console.log("You don't have enough cookies!");
    };
});
//buy a grandma
buyGrandma.addEventListener("click", () => {
    // Make sure we have enough cookies and subtract our cookies from the price.
    if (cookieCount >= grandmaPriceAmount) {
      // Subtract cookies from the price of the item.
      cookieCount +=  - grandmaPriceAmount;
      refreshCookieCount()
      // Upgrade power level
      grandmaLevelNumber += 1;
      // Update price.
      grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
      // Update grandma power
      grandmaPower += 10;
      // Turn autoGrandma on!
      autoGrandma = true
      autoGrandmaStart();
      // Refresh shop item
      refreshGrandma();
  };
});
