var api = 'http://162.219.245.61:11898';
var donationAddress = "WwaFjmWQrNG1h1bSVcP8UjKYL1nHRHp5sGVVSX9pZmtFjfPFfBi4XoJCWewvjXU4gxGmuiNpZSBLd4sgRWnusrNS15x8facrx";
var blockTargetInterval = 120; // enter the block interval in seconds
var coinUnits = 100000000;  // enter in the amount of atomic units in 1 coin, eg. 100000000 = 1 woo
var totalSupply =  10000000000000000; // enter the total supply in atomic units
var symbol = 'WOO'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "WOO": [
	["woo.cryptonote.club", "https://woo.cryptonote.club:8199"],
	["pool.woolongs.com", "http://pool.woolongs.com:8117"]	
 ]
};

var networkStat2 = {
    "WOO": [
	[""]
 ]
};
