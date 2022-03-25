import React, { useEffect } from "react";
import Heading from "../heading";
import { useNetwork } from "wagmi";
import { useNetworkStore } from "../../store";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const [{ data }] = useNetwork();
  const initNetwork = useNetworkStore((state) => state.setNetwork);
  useEffect(() => {
    if (data.chain)
      initNetwork(data.chain?.name ?? "Undefined", data.chain?.id.toFixed());
  }, [data, initNetwork]);

  return (
    <div>
      <Heading />
      {children}
    </div>
  );
};

export default Layout;
