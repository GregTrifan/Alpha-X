import { Box, Typography } from "@mui/material";
import { css } from "@emotion/react";
import WalletButton from "./WalletButton";
import { useNetworkStore } from "../store";
const Heading = () => {
  const networkName = useNetworkStore((state) => state.networkName);
  return (
    <Box
      css={css`
        background-color: #0a0a0a;
        color: whitesmoke;
        display: flex;
        justify-content: space-between;
        padding: 12px;
      `}
    >
      <Typography variant="h4">Alpha-C</Typography>
      <Box>{networkName}</Box>
      <WalletButton />
    </Box>
  );
};

export default Heading;
