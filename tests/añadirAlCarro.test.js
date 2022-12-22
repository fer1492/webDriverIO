import homePage from "../pages/home.page";
import busquedaPage from "../pages/busqueda.page";

const iphoneSearch = 'iphone';


describe('Carrito', () => {
  it('Debería añadir el articulo al carro', async () => {
    addStep('Ingresa al sitio web');
    await homePage.abrir();
    addStep('Busca iphone');
    await homePage.buscar(iphoneSearch);
    addStep('Ingresa al resultado de la busqueda');
    await busquedaPage.ingresarAlResultado();
    addStep('Ingresa el producto al carrito');
    await busquedaPage.ingresarAlProducto();
    addStep('Ingresa al carrito');
    await busquedaPage.ingresarAlCarrito();
    addStep('Verifica que el producto este en el carrito');
    await homePage.obtenerTextoBusquedaCarrito();
  });
});