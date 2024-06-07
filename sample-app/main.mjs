import { google, myproto } from "@wardenprotocol/wardenjs";
import utils from 'cosmjs-utils';

const Any = google.protobuf.Any;

const aminoSigner = await utils.getOfflineSignerAmino({
  chain: {
    slip44: 118,
    bech32_prefix: "warden",
  },
  mnemonic: "exclude try nephew main caught favorite tone degree lottery device tissue tent ugly mouse pelican gasp lava flush pen river noise remind balcony emerge",
});

const protoSigner = await utils.getOfflineSignerProto({
  chain: {
    slip44: 118,
    bech32_prefix: "warden",
  },
  mnemonic: "exclude try nephew main caught favorite tone degree lottery device tissue tent ugly mouse pelican gasp lava flush pen river noise remind balcony emerge",
});

const composer = myproto.MessageComposer.withTypeUrl;

const req = composer.myMethod({
  topLevelBigint: BigInt(42), // try to comment this out
  msg: Any.fromPartial({
    typeUrl: myproto.SomeMessage.typeUrl,
    value: myproto.SomeMessage.encode(myproto.SomeMessage.fromPartial({
      wrappedBigint: BigInt(123),
    })).finish(),
  }),
});

const accounts = await aminoSigner.getAccounts();

const protoSig = await protoSigner.signDirect(accounts[0].address, req)
console.log("proto:", protoSig.signed);

const aminoSig = await aminoSigner.signAmino(accounts[0].address, req)
console.log("amino:", aminoSig.signed);

