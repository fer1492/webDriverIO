import homePage from "../pages/home.page";
import menuPage from "../pages/menu.page";

describe('Menu', () => {
  it('Debería ingresar a Desktops/Mac y verificar que haya algún producto', async () => {
    addStep('Ingresa al sitio web');
    await homePage.abrir("/");
    addStep('Abre el menu de Desktops');
    await menuPage.ingresarDesktops();
    addStep('Ingresa a mac');
    await menuPage.ingresarAmac();
    addStep('Verifica que haya algun producto');
    await menuPage.verProducto();
  });
});


