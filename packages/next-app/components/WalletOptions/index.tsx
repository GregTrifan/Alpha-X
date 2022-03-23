import { useEffect } from "react";
import { useConnect, useAccount } from "wagmi";
import { Box, Modal, Grid, Button, CircularProgress } from "@mui/material";
import { css } from "@emotion/react";
interface Props {
  open: boolean;
  setOpen: (showWalletOptions: boolean) => void;
}

const WalletOptions = (props: Props) => {
  const { open, setOpen } = props;
  const [
    { data: connectData, loading: connectDataLoading, error },
    connect,
  ] = useConnect();
  const [{ data: accountData }] = useAccount();
  const closeModal = () => setOpen(false);
  useEffect(() => {
    accountData && setOpen(false);
  }, [accountData, setOpen]);
  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="connect-wallet"
      aria-describedby="Connect Ethereum Wallet to the DApp"
    >
      <Box
        css={css`
          position: absolute;
          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%);
          width: 60vh;
          background-color: whitesmoke;

          border-radius: 14px;
          max-width: 600px;
          text-align: center;
          margin-left: 2px;
          margin-right: 2px;
          box-shadow: 24;
          padding: 6px;
        `}
      >
        <h2>Choose a wallet</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            css={css`
              margin-top: 12px;
            `}
            direction="column"
            columns={connectData.connectors.length}
          >
            {connectData.connectors.map((c) => (
              <Button
                variant="contained"
                color="secondary"
                key={c.id}
                disabled={!c.ready || connectDataLoading}
                css={css`
                  margin: 4px;
                  text-transform: none;
                  border-radius: 6px;
                  font-size: x-large;
                `}
                onClick={() => connect(c)}
              >
                {connectDataLoading ? (
                  <CircularProgress
                    css={css`
                      color: black;
                    `}
                  />
                ) : (
                  `${c.name}${!c.ready ? " (unsupported)" : ""}`
                )}
              </Button>
            ))}
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default WalletOptions;
