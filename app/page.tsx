import MainViewClient from "app/MainViewClient";

const redirect_uri = process.env.COGNITO_REDIRECT_SIGN_IN ?? "";
const cognito_domain = process.env.COGNITO_DOMAIN ?? "";
const client_id = process.env.COGNITO_CLIENT_ID ?? "";

export default async function Home() {
  return (
    <MainViewClient
      redirect_uri={redirect_uri}
      cognito_domain={cognito_domain}
      client_id={client_id}
    />
  );
}

export const revalidate = 0;
