import { Box, Button, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Wallet } from "phosphor-react";
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
      <Button
        variant="contained"
        color="primary"
        startIcon={<Wallet />}
        css={css`
          border-radius: 40px;
        `}
      >
        Connect Wallet
      </Button>
    </Box>
  );
};

export default Heading;
