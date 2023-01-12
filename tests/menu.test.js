import homePage from "../pages/home.page";
import busquedaPage from "../pages/busqueda.page";

const articles = 'Desktops';
const articleProduct = 'Mac (';
const productName = 'iMac';


describe('Menu', () => {
  it('Debería clickear en en el menu en alguno de los botones desplegable, ingresar en un tipo de producto y verificar que los mismos se encuentren allí ', async () => {
    addStep('Ingresa al sitio web');
    await homePage.abrir("/");
    expect(await homePage.featureHome.isDisplayed(), 'No se esta mostrando el home de la página').to.be.true;
    addStep('Abre el articulo dado en el menu');
    await homePage.dropDown(articles);
    addStep('Selecciona un tipo de producto');
    await homePage.ingresarDropDown(articleProduct);
    addStep('Verifica que haya algun producto');
    expect(await busquedaPage.selectorProduct.getText()).to.be.equal(productName);
    addStep('Verifica que se esté mostrando el boton para volver al home y posteriormente lo clickea para volver al mismo');
    expect(await homePage.volverAlHome.isDisplayed(), 'No se esta mostrando el boton Your Store para volver al home').to.be.true;
    await homePage.volverHome();
    expect(await homePage.featureHome.isDisplayed(), 'No se esta mostrando el home de la página').to.be.true;
  });
});


