import type { NextPage } from "next";
import { useEffect,useState } from "react";
import Head from "next/head";
import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import HardhatDeployments from "../contracts/hardhat_contracts.json"
import { useSigner } from "wagmi";
import Networks from "../components/Networks"
import { useNetworkStore } from "../store";
import { ethers } from "ethers";
const Home: NextPage = () => {
  const [{ data }, getSigner] = useSigner()
  const networkId = useNetworkStore((state) => state.networkId);
  const networkName = useNetworkStore((state) => state.networkName);
  const [name, setName] = useState();
  

  async function fetchTokenName() {
    try {
      let address = HardhatDeployments[networkId][networkName.toLowerCase()].contracts.YourContract.address;
      let abi = HardhatDeployments[networkId][networkName.toLowerCase()].contracts.YourContract.abi;
    const signer = await getSigner()
    const contract = new ethers.Contract(address, abi, signer);
    const res = await contract.name()
    setName(res);
    }
    catch {
      setName(" ");
    }
  }

  useEffect(() => {
    fetchTokenName();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[networkId])
  return (
    <div>
      <Head>
        <title>Alpha-X</title>
        <meta name="description" content="Project under work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography
        variant="h2"
        css={css`
          font-weight: bold;
          text-align: center;
        `}
      >
        🚧🚧 WIP 🚧🚧
      </Typography>
      <Typography variant="h4" css={css`text-align: center`}>
        Contract name - {name}
      </Typography>
      <Networks/>
    </div>
  );
};

export default Home;
