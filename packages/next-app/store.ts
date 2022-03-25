import create from "zustand";

type NetworkState = {
  networkName: string;
  networkId: string;
  setNetwork: (networkName: string, networkId: string) => void;
};

export const useNetworkStore = create<NetworkState>((set) => ({
  // Defaults to Mainnet
  networkName: "Mainnet",
  networkId: "0",
  setNetwork: (networkName: string, networkId: string) =>
    set(() => ({ networkId, networkName })),
}));
