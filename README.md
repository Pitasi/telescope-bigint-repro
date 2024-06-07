steps:

```sh
cd wardenjs
npm install
npm run codegen
npm run build

cd ../sample-app
node main.mjs
```

output on my machine:
```
    return JSON.stringify(sortedObject(obj));
                ^
TypeError: Do not know how to serialize a BigInt
    at JSON.stringify (<anonymous>)
    at sortedJsonStringify (/Users/antonio/git/telescope-repro/sample-app/node_modules/@cosmjs/amino/build/signdoc.js:25:17)
    at serializeSignDoc (/Users/antonio/git/telescope-repro/sample-app/node_modules/@cosmjs/amino/build/signdoc.js:40:35)
    at Secp256k1HdWallet.signAmino (/Users/antonio/git/telescope-repro/sample-app/node_modules/@cosmjs/amino/build/secp256k1hdwallet.js:173:77)
    at async file:///Users/antonio/git/telescope-repro/sample-app/main.mjs:20:13
```

I would expect to get the signed message back but looks like something is wrong with the serialization.
