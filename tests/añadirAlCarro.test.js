import homePage from "../pages/home.page";
import busquedaPage from "../pages/busqueda.page";

const IPHONE = 'iphone';

describe('Carrito', () => {
  it('Debería añadir el articulo al carro', async () => {
    await homePage.abrir();
    await homePage.buscar(IPHONE);
    await busquedaPage.ingresarAlResultado();
    await busquedaPage.ingresarAlProducto();
  });
});