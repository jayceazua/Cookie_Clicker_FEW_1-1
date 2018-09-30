//declare default variables
let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;
//declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

let refreshCookieCount = () => {
  cookieCounter.innerHTML = cookieCount;
}

cookieClicker.addEventListener('click', () => {
    cookieCount += clickPower;
    refreshCookieCount();
});

buyClickPower.addEventListener("click", () => {
    if (cookieCount >= clickPowerPriceAmount) {
        //subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;
        //update cookie counter.
        refreshCookieCount();
    } else {
        console.log("You don't have enough cookies!");
    };
});