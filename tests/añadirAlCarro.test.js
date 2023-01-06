import homePage from "../pages/home.page";
import busquedaPage from "../pages/busqueda.page";

const productName = 'iPhone';
const id = 'product 11';

describe('Carrito', () => {
  it('Debería añadir el articulo al carro', async () => {
    addStep('Ingresa al sitio web');
    await homePage.abrir("/");
    expect(await homePage.featureHome.isDisplayed(), 'No se esta mostrando el home de la página').to.be.true;
    addStep('Busca iphone');
    await homePage.buscar(productName);
    addStep('Ingresa al resultado de la busqueda');
    await busquedaPage.ingresarAlResultado();
    expect (await busquedaPage.buttonCart.isDisplayed(), 'No se esta mostrando el producto').to.be.true;
    await (await busquedaPage.product(productName)).scrollIntoView();
    addStep('Ingresa el producto al carrito');
    await busquedaPage.ingresarElProducto();
    expect (await busquedaPage.success.waitForDisplayed( { timeout:5000 } ), 'El mensaje no muestra').to.be.true;
    addStep('Hace click en el boton del carrito y se despliega el menu con los detalles del mismo');
    await busquedaPage.ingresarAlCarrito();
    addStep('Ingresa al carrito');
    await busquedaPage.mostrarCarrito();
    addStep('Verifica que el producto este en el carrito');
    expect(await busquedaPage.productoId.isDisplayed(), 'El producto seleccionado no se encuentra dentro del carrito').to.be.true;
    await (await busquedaPage.productId(id)).scrollIntoView();
    addStep('Regresa al home');
    expect(await homePage.volverAlHome.isDisplayed(), 'No se muestra el boton Your Store para volver al home').to.be.true;
    await homePage.volverHome();
  });
});