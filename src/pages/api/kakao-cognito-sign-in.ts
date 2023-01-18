import type { NextApiRequest, NextApiResponse } from "next";

const domain = process.env.COGNITO_DOMAIN ?? "";
const redirect_uri = process.env.COGNITO_REDIRECT_SIGN_IN ?? "";
const UserPoolId = process.env.COGNITO_USER_POOL_ID ?? "";
const ClientId = process.env.KAKAO_CLIENT_ID ?? "";

const poolData = {
  UserPoolId,
  ClientId,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `https://${domain}/login?client_id=${ClientId}&response_type=token&scope=email+openid&redirect_uri=${redirect_uri}`;
  const response = await fetch(url);
  console.log({ body: response.body, response });
  return res.status(200).json(response);
}
