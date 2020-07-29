参考示例 https://github.com/LambdaIM/walletdoccode 

完善的 lambda HDKey 用于演示和测试

主要功能

* 1 生成助记词
* 2 根据助记词生成私钥、公钥
* 3 生成lambda 地址
* 4 对json对象进行签名
* 5 从钱包配置文件json中解密出私钥
* 6 生成只允许签名一次的签名方法
* 7 生成验证节点操作地址
* 8 生成矿工操作地址



# lambda HDKey
可以使用在node 或 webpack 中，浏览器环境暂时不能使用

代码示例子和说明
```
var hdkey= require('./index.js')
//生成助记词
var Mnemonic = hdkey.crypto.generateRandomMnemonic(256);
console.log('Mnemonic',Mnemonic)

//根据助记词生成密钥对
var keys = hdkey.crypto.getKeysFromMnemonic(Mnemonic)
console.log('keys',keys)
//根据公钥计算lambda地址
const address = hdkey.address.getAddress(keys.publicKey);
console.log('address',address)

var password='123456'
var name ='name'
//保存密钥对 为json，用于写入文件
var walletjson = hdkey.keyStore.toJson(keys, password, name);
console.log('walletjson',walletjson)
//从json 中解析私钥 
var Privatekey = hdkey.keyStore.checkJson(walletjson,password);

console.log('Privatekey',Privatekey)
//对json对象进行签名
var signresult =  hdkey.crypto.signJson({a:1},Privatekey);


console.log('signresult',signresult)
//根据钱包配置文件，生成一个只能签名一次的方法
var SignerFn =  hdkey.keyStore.getSigner(walletjson,password)
//用一次性签名方法签名
var signresult2 = SignerFn(JSON.stringify({a:1}))

//console.log('signresult',signresult.toString('base64'))
//console.log('signresult2',signresult2.signature.toString('base64'))

//根据lambda地址，生成验证节点操作地址
var validatorAddress =  hdkey.address.validatorAddress(address)
console.log('validatorAddress',validatorAddress)
//根据lambda地址，生成矿工操作地址
var MinerAddress =  hdkey.address.MinerAddress(address)

console.log('MinerAddress',MinerAddress)
```
[API documentation](./api.md "api")

# LICENSE

MIT.
