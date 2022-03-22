import { Box, Button, Typography } from "@mui/material";
import { css } from "@emotion/react";
import WalletButton from "./WalletButton";
const Heading = () => {
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
      <WalletButton />
    </Box>
  );
};

export default Heading;
