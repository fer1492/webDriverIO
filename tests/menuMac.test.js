import homePage from "../pages/home.page";
import menuPage from "../pages/menu.page";

describe('Menu', () => {
  it('Debería ingresar a Desktops/Mac y verificar que este la mac', async () => {
    addStep('Ingresa al sitio web');
    await homePage.abrir("/");
    addStep('Abre el menu de Desktops');
    await menuPage.ingresarDesktops();
    addStep('Ingresa a mac');
    await menuPage.ingresarAmac();
    addStep('Verifica que este la mac');
    //expect(await menuPage.verMac.isDisplayed(), 'No se esta mostrando el boton Your Store para volver al home').to.be.true;
    await menuPage.verMac();
  });
});


