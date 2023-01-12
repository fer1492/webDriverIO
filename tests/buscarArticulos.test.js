import homePage from '../pages/home.page';
import DATOS from "../datos/articulos";

describe("Búsqueda de varios articulos: ", function () {
  DATOS.forEach(({ articulo }) => {
    it(`Debería buscar ${articulo}`, async () => {
      addStep('Abre la pagina');
      await homePage.abrir("/");
      expect(await homePage.featureHome.isDisplayed(), 'No se esta mostrando el home de la página').to.be.true;
      addStep('Busca el articulo que le pasamos por parámetro');
      await homePage.buscar(articulo);
      addStep('Se verifica si el articulo encontrado coincide con el que buscamos');
      await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
      addStep('Verifica que se esté mostrando el boton para volver al home y posteriormente lo clickea para volver al mismo');
      expect(await homePage.volverAlHome.isDisplayed(), 'No se esta mostrando el boton Your Store para volver al home').to.be.true;
      await homePage.volverHome();
      expect(await homePage.featureHome.isDisplayed(), 'No se esta mostrando el home de la página').to.be.true;
    });
  });
});