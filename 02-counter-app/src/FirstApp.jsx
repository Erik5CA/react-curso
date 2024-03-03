import { PropTypes } from "prop-types";

export function FirstApp({ title, subtitle }) {
  // console.log(props);

  // if (title) {
  //   throw new Error("El titulo no existe");
  // }

  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subtitle: "No hay subtitulo",
};
