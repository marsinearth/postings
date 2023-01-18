"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { TokenContext } from "src/contexts/tokenContext";

export default function Authorize() {
  const { setToken } = useContext(TokenContext);
  const { replace } = useRouter();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const idToken = hash.split("&").reduce((token, pair) => {
      const kv = pair.split("=");
      if (kv[0] === "id_token") {
        token = kv[1];
      }
      return token;
    }, "");

    if (idToken) {
      // save idToken to TokenContext
      setToken(idToken);
      replace("/");
    }
  }, [setToken, replace]);

  return null;
}
