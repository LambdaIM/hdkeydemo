# lambdaHDKey
Use in node environment or webback

```
var hdkey=require('@jswebfans/hdkeytest')
```

for example
```
var hdkey= require('./index.js')
//Generate 256 mnemonics
var Mnemonic = hdkey.crypto.generateRandomMnemonic(256);
console.log('Mnemonic',Mnemonic)

//Generating public private key pairs based on mnemonics
var keys = hdkey.crypto.getKeysFromMnemonic(Mnemonic)
console.log('keys',keys)
//Generate address from public key
const address = hdkey.address.getAddress(keys.publicKey);
console.log('address',address)

var password='123456'
var name ='name'
//Generate keystore to save public and private key pair information
var walletjson = hdkey.keyStore.toJson(keys, password, name);
console.log('walletjson',walletjson)
//Decrypt private key from keystore
var Privatekey = hdkey.keyStore.checkJson(walletjson,password);

console.log('Privatekey',Privatekey)
//Signature
var signresult =  hdkey.crypto.signJson({a:1},Privatekey);


console.log('signresult',signresult)
//Generating signature method based on keystore configuration file
var SignerFn =  hdkey.keyStore.getSigner(walletjson,password)
//Signature
var signresult2 = SignerFn(JSON.stringify({a:1}))

console.log('signresult',signresult.toString('base64'))
console.log('signresult2',signresult2.signature.toString('base64'))

//Generate node operation address based on lambda address
var validatorAddress =  hdkey.address.validatorAddress(address)
console.log('validatorAddress',validatorAddress)
// Generate miner address from lambda address
var MinerAddress =  hdkey.address.MinerAddress(address)

console.log('MinerAddress',MinerAddress)
```
[API documentation](./api.md "api")

# LICENSE

MIT.
