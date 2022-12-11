import Door from "../components/Door";

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Door door={{day: 1, title: "Første låge", description: "Neej hvor fint, nu har du åbnet første låge"}}></Door>
    </>
  );
};
