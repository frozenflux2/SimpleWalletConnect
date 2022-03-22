import React, { useEffect } from "react";
import { SigningCosmosClient } from "@cosmjs/launchpad";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import "./App.css";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

const CHAIN_ID = "cosmoshub-4";
// const CHAIN_ID = "osmosis-1";

function App() {
  useEffect(() => {
    const connectWallet = async () => {
      console.log("react app loaded", window.keplr);
      if (!window.keplr) return;
      await window.keplr.enable(CHAIN_ID);
      const signer: any = window.keplr.getOfflineSigner(CHAIN_ID);
      console.log("🚀 ~ file: App.tsx ~ line 13 ~ connectWal ~ signer", signer);
      const accounts = await signer.getAccounts();
      console.log(
        "🚀 ~ file: App.tsx ~ line 17 ~ connectWal ~ accounts",
        accounts
      );

      // const cosmJS = new SigningCosmosClient(
      //   // "https://rpc-cosmoshub.blockapsis.com", // rpc endpoint of osmosis-1
      //   "https://lcd-cosmoshub.keplr.app",
      //   accounts[0].address,
      //   signer
      // );
    };
    connectWallet();
  }, []);
  return <div className="App">Welcom to simple connect wallet app</div>;
}

export default App;
