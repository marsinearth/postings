"use client";

import { TokenContext, TokenProvider } from "@/src/contexts/tokenContext";
import { createEnvironment } from "@/src/relay/environment";
import { ReactNode, useContext } from "react";
import { RelayEnvironmentProvider } from "react-relay";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Postings</title>
      </head>
      <TokenProvider>
        <RelayEnvironmentContainer>{children}</RelayEnvironmentContainer>
      </TokenProvider>
    </html>
  );
}

function RelayEnvironmentContainer({ children }: { children: ReactNode }) {
  const { token } = useContext(TokenContext);
  const environment = createEnvironment(token);

  return (
    <RelayEnvironmentProvider environment={environment}>
      <body>{children}</body>
    </RelayEnvironmentProvider>
  );
}
