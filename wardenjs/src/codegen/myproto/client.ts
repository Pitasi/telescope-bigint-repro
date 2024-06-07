//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as sampleTxRegistry from "../sample/tx.registry.js";
import * as sampleTxAmino from "../sample/tx.amino.js";
export const myprotoAminoConverters = {
  ...sampleTxAmino.AminoConverter
};
export const myprotoProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...sampleTxRegistry.registry];
export const getSigningMyprotoClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...myprotoProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...myprotoAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningMyprotoClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningMyprotoClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};