import { Box, Typography } from "@mui/material";
import { css } from "@emotion/react";
const Heading = () => {
  return (
    <Box
      css={css`
        background-color: #0a0a0a;
        color: whitesmoke;
        display: flex;
        padding: 12px;
      `}
    >
      <Typography variant="h4">Alpha-C</Typography>
    </Box>
  );
};

export default Heading;
