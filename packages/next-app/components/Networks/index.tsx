import { Button } from "@mui/material";
import { useNetwork } from "wagmi";
import { css } from "@emotion/react";

const Networks = () => {
  const [{ data, error }, switchNetwork] = useNetwork();

  return (
    <div>
      <div
        css={css`
          margin-left: 6px;
        `}
      >
        {data.chain?.name} {data.chain?.unsupported && "(unsupported)"}
        {data.chain?.id}
      </div>

      {switchNetwork &&
        data.chains.map((x) =>
          x.id === data.chain?.id ? null : (
            <Button
              css={css`
                margin: 4px;
              `}
              variant="contained"
              key={x.id}
              onClick={() => switchNetwork(x.id)}
            >
              Switch to {x.name}
            </Button>
          )
        )}
      {switchNetwork && (
        <Button onClick={() => switchNetwork(80001)}>Switch to Mumbai</Button>
      )}
      {error && <div>{error?.message}</div>}
    </div>
  );
};

export default Networks;
