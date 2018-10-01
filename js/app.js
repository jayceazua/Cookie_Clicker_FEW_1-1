//declare default variables
let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let grandmaAuto = false;
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;
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
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

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
};

let refreshFacility = () => {
    facilityLevel.innerHTML = facilityLevelNumber
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
};

//game loop
let autoFacilityStart = () => {
    let facilityInt = window.setInterval(() => {
        cookieCount += facilityPower;
        refreshCookieCount();
    }, 1000);
};

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
        clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);
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
        cookieCount += -grandmaPriceAmount;
        refreshCookieCount()
        // Upgrade power level
        grandmaLevelNumber += 1;
        // Update price.
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
        //update grandma power
        grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
        // Turn autoGrandma on!
        autoGrandma = true
        autoGrandmaStart();
        // Refresh shop item
        refreshGrandma();
    };
});
//buy a facility
buyFacility.addEventListener("click", () => {
    //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
        cookieCount -= facilityPriceAmount;
        refreshCookieCount()
        //upgrade power level
        facilityLevelNumber += 1;
        //update price
        facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);
        //update facility power
        facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);;
        //turn autoFacility on!
        facilityAuto = true
        autoFacilityStart();
        //refresh shop item
        refreshFacility();
    };
});
