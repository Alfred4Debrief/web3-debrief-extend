exports.extend = function (web3) {
    web3._extend || (web3._extend = web3.extend)

    web3._extend({
        property: 'dbf',
        methods:
            [
                new web3._extend.Method({
                    name: 'register',
                    call: 'dbf_register',
                    params: 4,
                    inputFormatter: [
                        web3._extend.formatters.inputAddressFormatter,
                        null,
                        null,
                        web3._extend.formatters.inputDefaultBlockNumberFormatter
                    ]
                }),
                new web3._extend.Method({
                    name: 'getUser',
                    call: 'dbf_getUser',
                    params: 2,
                    inputFormatter: [
                        web3._extend.formatters.inputAddressFormatter,
                        web3._extend.formatters.inputDefaultBlockNumberFormatter
                    ]
                }),
                new web3._extend.Method({
                    name: 'getUsers',
                    call: 'dbf_getUsers',
                    params: 1,
                    inputFormatter: [
                        web3._extend.formatters.inputDefaultBlockNumberFormatter
                    ]
                }),
            ]
    });

    web3.dbf.defaultChainId = 36647

    web3.dbf.buildRegisterData = function (nickname, pubKey) {
        return Buffer.from(pubKey.toString("hex") + Buffer.from(nickname, "utf8").toString("hex"), "hex")
    }

    web3.dbf.consts = {
        calls: {
            "register": "0xffffffffffffffffffffffffffffffffffffffff"
        }
    }
}