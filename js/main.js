let totalCoins = 0;
let availableCoins = 0;
let smallUpgradeCount = 0;
let smallUpgradePrice = 10;
let bigUpgradeCount = 0;
let bigUpgradePrice = 90;


setInterval(function () {
    if (availableCoins < smallUpgradePrice) {
        document.getElementById('small-upgrade-btn').disabled = true;
    } else {
        document.getElementById('small-upgrade-btn').disabled = false;
    }
    totalCoins += smallUpgradeCount / 100;
    availableCoins += smallUpgradeCount / 100;

    if (availableCoins < bigUpgradePrice) {
        document.getElementById('big-upgrade-btn').disabled = true;
    } else {
        document.getElementById('big-upgrade-btn').disabled = false;
    }
    totalCoins += bigUpgradeCount / 10;
    availableCoins += bigUpgradeCount / 10;


    document.querySelector('#total-coin-count').innerHTML = totalCoins.toFixed(0);
    document.querySelector('#available-coin-count').innerHTML = availableCoins.toFixed(0);
    document.querySelector('#small-upgrade-count').innerHTML = smallUpgradeCount;
    document.querySelector('#big-upgrade-count').innerHTML = bigUpgradeCount;
    document.querySelector('#small-upgrade-price').innerHTML = smallUpgradePrice.toFixed(0);
    document.querySelector('#big-upgrade-price').innerHTML = bigUpgradePrice.toFixed(0);
}, 10);


document.getElementById('click-me-btn').addEventListener('click', function () {
    totalCoins++;
    availableCoins++;
});

document.getElementById('small-upgrade-btn').addEventListener('click', function () {
    smallUpgradeCount++;
    availableCoins -= smallUpgradePrice;
    smallUpgradePrice = smallUpgradePrice + (smallUpgradePrice * 0.1);

});

document.getElementById('big-upgrade-btn').addEventListener('click', function () {
    bigUpgradeCount++;
    availableCoins -= bigUpgradePrice;
    bigUpgradePrice = bigUpgradePrice + (bigUpgradePrice * 0.1);
});



