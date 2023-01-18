"use client";

import Image from "next/image";

type KakaoLoginProps = Record<string, string>;

export default function KakaoLogin({
  cognito_domain,
  redirect_uri,
  client_id,
}: KakaoLoginProps) {
  const onClick = () => {
    window.location.href = `https://${cognito_domain}/login?response_type=token&scope=email+openid&client_id=${client_id}&redirect_uri=${redirect_uri}`;
  };

  return (
    <>
      <h1>Test Kakao Login</h1>
      <button
        style={{
          border: "none",
          height: 45,
          cursor: "pointer",
        }}
      >
        <Image
          priority
          width={300}
          height={45}
          alt="카카오 로그인 버튼"
          src="/images/kakao_login_medium_wide.png"
          onClick={onClick}
        />
      </button>
    </>
  );
}
