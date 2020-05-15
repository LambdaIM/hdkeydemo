var hdkey= require('./index.js')
//生成长度为256 的助记词
var Mnemonic = hdkey.crypto.generateRandomMnemonic(256);
console.log('Mnemonic',Mnemonic)

//根据助记词 生成公私密钥对
var keys = hdkey.crypto.getKeysFromMnemonic(Mnemonic)
console.log('keys',keys)
//根据公钥生成地址
const address = hdkey.address.getAddress(keys.publicKey);
console.log('address',address)

var password='123456'
var name ='账户名称'
//生成keystore 保存公私钥对信息
var walletjson = hdkey.keyStore.toJson(keys, password, name);
console.log('walletjson',walletjson)
//从keystore  中解密出 私钥
var Privatekey = hdkey.keyStore.checkJson(walletjson,password);

console.log('Privatekey',Privatekey)
//签名
var signresult =  hdkey.crypto.signJson({a:1},Privatekey);


console.log('signresult',signresult)
//根据keyStore 配置文件生成签名方法
var SignerFn =  hdkey.keyStore.getSigner(walletjson,password)
//签名
var signresult2 = SignerFn(JSON.stringify({a:1}))

console.log('signresult',signresult.toString('base64'))
console.log('signresult2',signresult2.signature.toString('base64'))

//根据lambda 地址生成 节点操作地址
var validatorAddress =  hdkey.address.validatorAddress(address)
console.log('validatorAddress',validatorAddress)
// 根据lambda地址 生成矿工地址
var MinerAddress =  hdkey.address.MinerAddress(address)

console.log('MinerAddress',MinerAddress)