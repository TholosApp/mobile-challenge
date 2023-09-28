## TODO:
- [x] ability to create wallet 
- [x] ability to sign a message using that wallets private key 
- [x] store the private key in encrypted storage 
    - [x] android
    - [] ios 
- [x] show the ETH wallet address of the wallet on the home screen 
- [] sign an ethereum transaction 
    - RLP package included in package.json

## NOTES: 
- eliptic library to get a public key: https://github.com/enyalabs/elliptic-expo
- encrypted storage: https://docs.expo.dev/versions/latest/sdk/securestore/
- use expo router for navigation: https://docs.expo.dev/routing/navigating-pages/
- for turning public key into wallet address: https://ethereum.org/en/developers/docs/accounts/#account-creation
- ethereum transactions: https://ethereum.org/en/developers/docs/transactions/
- rlp package: https://www.npmjs.com/package/rlp

## WIREFRAME
![wireframe](/docs/app-wireframe.png)

## RUNNING THE APP 
run ```npm start``` to start the expo server. From there, either open an emulator or scan the sq code to view the app on your device.

The emulators for ios and android can also be started directly by runniung 
```npm run android``` or ```npm run ios```

The cache can be cleared by passing the ```--clear``` flag

## TESTS 
unit tests are included using jest and can be run using ```npm test```