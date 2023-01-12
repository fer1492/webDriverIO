import { expect } from 'chai';
import homePage from "../pages/home.page";
import busquedaPage from "../pages/busqueda.page";

describe('Color', () => {
it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {
    addStep('Ingresa al sitio web');
    await homePage.abrir("/");
    expect(await homePage.featureHome.isDisplayed(), 'No se esta mostrando el home de la página').to.be.true;
    addStep('Busca apple cinema');
    await homePage.buscar('apple cinema');
    await busquedaPage.ingresarAlResultado();
    addStep('Selecciona el color dos de apple cinema');
    await homePage.dropDownColor.selectByIndex(2);
    expect(await homePage.barraDeBusqueda.scrollIntoView());
    addStep('Verifica que se esté mostrando el boton para volver al home y posteriormente lo clickea para volver al mismo');
    expect(await homePage.volverAlHome.isDisplayed(), 'No se esta mostrando el boton Your Store para volver al home').to.be.true;
    await homePage.volverHome();
    expect(await homePage.featureHome.isDisplayed(), 'No se esta mostrando el home de la página').to.be.true;
});
});