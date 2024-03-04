import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en en componente <CounterApp/>", () => {
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={100} />);
    expect(container).toMatchSnapshot();
  });
  test("Debe de mostrar el valor inicial de 100", () => {
    const value = "100";
    render(<CounterApp value={100} />);
    expect(screen.getByText(value)).toBeTruthy();
  });
  test("Debe de incrementar con el botón +1", () => {
    render(<CounterApp value={100} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });
  test("Debe de decrementar con el botón -1", () => {
    render(<CounterApp value={100} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("99")).toBeTruthy();
  });
  test("Debe funcionar el botón de reset", () => {
    render(<CounterApp value={100} />);
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("100")).toBeTruthy();
  });
});
