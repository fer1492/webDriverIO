import homePage from "../pages/home.page";
import menuPage from "../pages/menu.page";
import carritoPage from "../pages/carrito.page";
import busquedaPage from "../pages/busqueda.page";

const productName = 'iMac';

describe('Menu', () => {
  it('Debería ingresar a Desktops/Mac y verificar que haya algún producto', async () => {
    addStep('Ingresa al sitio web');
    await homePage.abrir("/");
    expect(await homePage.featureHome.isDisplayed(), 'No se esta mostrando el home de la página').to.be.true;
    addStep('Abre el menu de Desktops');
    await menuPage.ingresarDesktops();
    addStep('Ingresa a mac');
    await menuPage.ingresarAmac();
    addStep('Verifica que haya algun producto');
    expect(await busquedaPage.imagenProducto.isDisplayed(), 'No se está mostrando el producto').to.be.true;
    await busquedaPage.product(productName);
    expect(await homePage.volverAlHome.isDisplayed(), 'No se esta mostrando el boton Your Store para volver al home').to.be.true;
    await homePage.volverHome();
  });
});


