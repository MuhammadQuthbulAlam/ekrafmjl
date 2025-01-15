import Login from "../../app/component/Login";

export async function generateMetadata() {
  return {
    title: "Login",
    description: "Halaman Login.",
  };
}

export default function HalamanLogin() {
  return (
    <>
      <Login />
    </>
  );
}
