import Desa from "../../app/component/Desa";
export async function generateMetadata() {
  return {
    title: "Desa Tematik Kreatif",
    description: "Halaman Desa Tematik Kreatif.",
  };
}
export default function page() {
  return (
    <>
      <Desa />
    </>
  );
}
