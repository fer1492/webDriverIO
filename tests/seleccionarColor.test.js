import { expect } from 'chai';
import homePage from "../pages/home.page";
import busquedaPage from "../pages/busqueda.page";

const productoBuscado = 'Apple Cinema 30"';
const color = 2;
const colorStr = 'Blue (+$3.60)';

describe('Color', () => {
it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {
    addStep('Ingresa al sitio web');
    await homePage.abrir("/");
    expect(await homePage.featureHome.isDisplayed(), 'No se esta mostrando el home de la página').to.be.true;
    addStep('Busca un artículo');
    await homePage.buscar(productoBuscado);
    expect(await busquedaPage.selectorProduct.getText()).to.be.equal(productoBuscado);
    addStep('Ingresa al producto buscado');
    await busquedaPage.ingresarAlResultado();
    expect (await busquedaPage.productalIngresar.getText()).to.be.equal(productoBuscado);
    addStep('Selecciona el color');
    await homePage.dropDownColor.selectByIndex(color);
    //expect (await homePage.dropDownColor.getText()).to.be.equal(color);
    expect (await busquedaPage.colorIngresado.getText()).to.be.equal(colorStr);
    addStep('Verifica que se esté mostrando el boton para volver al home y posteriormente lo clickea para volver al mismo');
    expect(await homePage.volverAlHome.isDisplayed(), 'No se esta mostrando el boton Your Store para volver al home').to.be.true;
    await homePage.volverHome();
    expect(await homePage.featureHome.isDisplayed(), 'No se esta mostrando el home de la página').to.be.true;
});
});