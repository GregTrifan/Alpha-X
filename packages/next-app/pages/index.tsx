import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import HardhatDeployments from "../contracts/hardhat_contracts.json"
import { useContract, useSigner } from "wagmi";
import Networks from "../components/Networks"
const Home: NextPage = () => {
  const [{ data }, getSigner] = useSigner()
  const contract = useContract({
    addressOrName: HardhatDeployments[80001]
      .mumbai.contracts.YourContract.address,
    contractInterface: HardhatDeployments[80001]
      .mumbai.contracts.YourContract.abi,
    signerOrProvider: data
  })
  
  return (
    <div>
      <Head>
        <title>Alpha-C</title>
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
      <Networks/>
    </div>
  );
};

export default Home;
