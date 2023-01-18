import { createContext, ReactNode, useMemo, useState } from "react";

export const TokenContext = createContext({
  token: "",
  setToken: (_t: string) => {},
});

export function TokenProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState("");

  const value = useMemo(() => ({ token, setToken }), [token, setToken]);

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
}
