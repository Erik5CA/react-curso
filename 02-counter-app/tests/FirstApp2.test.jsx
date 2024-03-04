import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  const title = "Hola soy guku";
  const subtitulo = "Soy un subtitulo";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el mensaje "Hola soy goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getAllByText(title)).toBeTruthy();
  });

  test("Debe de mostrar el titulo eh un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });
  test("Debe de mostrar el subtitulo enviado en props", () => {
    render(<FirstApp title={title} subtitle={subtitulo} />);
    expect(screen.getByText("Soy un subtitulo")).toBeTruthy();
  });
});
