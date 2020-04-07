var web3DebriefExtend = require('./lib/web3DebriefExtend.js');

if (typeof window !== 'undefined' && typeof window.web3DebriefExtend === 'undefined') {
    window.web3DebriefExtend = web3DebriefExtend;
}

module.exports = web3DebriefExtend;