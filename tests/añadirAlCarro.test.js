import homePage from "../pages/home.page";
import busquedaPage from "../pages/busqueda.page";

describe('Carrito', () => {
  it('Debería añadir el articulo al carro', async () => {
    await homePage.abrir("http://opencart.abstracta.us");
    await homePage.buscar('iphone');
    await browser.pause(4000);
    await $('.img-responsive').click();
    await browser.pause(4000);
    await $('#button-cart').click();
    await browser.pause(4000);
  });
});