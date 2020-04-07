exports.extend = function (web3) {
    web3._extend || (web3._extend = web3.extend)
}