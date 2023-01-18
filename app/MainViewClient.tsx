"use client";

import PostingsList from "@/src/components/List";
import { TokenContext } from "@/src/contexts/tokenContext";
import { useContext } from "react";
import KakaoLogin from "src/components/KakaoLogin";

type MainViewClientProps = {
  cognito_domain: string;
  redirect_uri: string;
  client_id: string;
};

export default function MainViewClient({
  cognito_domain,
  redirect_uri,
  client_id,
}: MainViewClientProps) {
  const { token } = useContext(TokenContext);

  console.log({ token });

  if (token) {
    return <PostingsList />;
  }

  return (
    <KakaoLogin
      cognito_domain={cognito_domain}
      redirect_uri={redirect_uri}
      client_id={client_id}
    />
  );
}
