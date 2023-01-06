import { expect } from 'chai';
import homePage from "../pages/home.page";
import busquedaPage from "../pages/busqueda.page";

describe('Color', () => {
it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {
    addStep('Ingresa al sitio web');
    await homePage.abrir("/");
    expect(await homePage.featureHome.isDisplayed(), 'No se esta mostrando el home de la página').to.be.true;
    addStep('Hace scroll hasta que se vea el footer');
    await homePage.footer.scrollIntoView();
    addStep('Busca apple cinema');
    await homePage.buscar('apple cinema');
    await busquedaPage.ingresarAlResultado();
    addStep('Selecciona el color dos de apple cinema');
    await homePage.dropDownColor.selectByIndex(2);
    expect(await homePage.barraDeBusqueda.scrollIntoView());
    addStep('Regresa al home');
    expect(await homePage.volverAlHome.isDisplayed(), 'No se esta mostrando el boton Your Store para volver al home').to.be.true;
    await homePage.volverHome();
});
});