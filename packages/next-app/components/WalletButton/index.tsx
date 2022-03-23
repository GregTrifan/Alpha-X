import { useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { Button, Menu, MenuItem, Box } from "@mui/material";
import { css } from "@emotion/react";
import { SignOut, Wallet } from "phosphor-react";
import WalletOptions from "../WalletOptions";
const WalletButton = () => {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [
    { data: accountData, loading: accountLoading },
    disconnect,
  ] = useAccount({
    fetchEns: true,
  });
  const [{ data: balanceData, loading: balanceLoading }] = useBalance({
    addressOrName: accountData?.address,
    watch: true,
  });
  const openModal = () => setShowWalletOptions(true);
  const loading = (accountLoading || balanceLoading) && !balanceData;

  if (loading) return <div>Loading...</div>;
  if (accountData)
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Wallet />}
          onClick={handleMenuClick}
          css={css`
            border-radius: 40px;
          `}
        >
          {accountData?.ens?.name ??
            accountData?.address.substring(0, 4) +
              "..." +
              accountData?.address.substring(
                accountData?.address.length - 3,
                accountData?.address.length
              )}
        </Button>
        <Menu
          open={openMenu}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          css={css`
            margin-top: 40px;
            margin-left: 12px;
          `}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            css={css`
              margin-left: 10px;
              margin-right: 10px;
              margin-top: 9px;
              margin-bottom: 6px;
            `}
          >
            {`Ξ ${Number(balanceData?.formatted).toFixed(4)} ${
              balanceData?.symbol
            }`}
          </Box>
          <MenuItem
            onClick={disconnect}
            css={css`
              display: flex;
            `}
          >
            <SignOut
              css={css`
                margin-right: 2px;
              `}
            />{" "}
            Disconnect
          </MenuItem>
        </Menu>
      </>
    );

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Wallet />}
        onClick={openModal}
        css={css`
          border-radius: 40px;
        `}
      >
        Connect Wallet
      </Button>
      <WalletOptions open={showWalletOptions} setOpen={setShowWalletOptions} />
    </>
  );
};

export default WalletButton;
