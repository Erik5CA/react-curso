/* eslint-disable react/prop-types */
const newMessage = "Fernando";
const objeto = {
  nombre: "Erik",
  apellido: "Castillo",
};

const getResult = () => {
  return 4 + 4;
};

export function FirstApp({ title = "Hola soy Erik", subtitle }) {
  // console.log(props);
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h1>First App {newMessage}</h1>
      <code>{JSON.stringify(objeto)}</code>
      <p>Soy un subtitulo</p>
      <p>Una Función {getResult()}</p>
    </>
  );
}
