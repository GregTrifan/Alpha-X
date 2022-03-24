import type { NextPage } from "next";
import Head from "next/head";
import { Typography,Button } from "@mui/material";
import { css } from "@emotion/react";
import HardhatDeployments from "../contracts/hardhat_contracts.json"
import { useContract,useSigner,useNetwork} from "wagmi";
const Home: NextPage = () => {
  const [{ data }, getSigner] = useSigner()
  const contract = useContract({
    addressOrName: HardhatDeployments[80001]
      .mumbai.contracts.YourContract.address,
    contractInterface:HardhatDeployments[80001]
      .mumbai.contracts.YourContract.abi,
    signerOrProvider:data
  })
  const Networks = () => {
    const [{ data, error}, switchNetwork] = useNetwork()

  return (
    <div >
      <div css={css`margin-left:6px`}>
        {data.chain?.name}{' '}
        {data.chain?.unsupported && '(unsupported)'}
      </div>

      {switchNetwork &&
        data.chains.map((x) =>
          x.id === data.chain?.id ? null : (
            <Button css={css`margin:4px`} variant="contained" key={x.id} onClick={() => switchNetwork(x.id)}>
              Switch to {x.name}
            </Button>
          ),
        )}

      {error && <div>{error?.message}</div>}
    </div>
  )

  }
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
