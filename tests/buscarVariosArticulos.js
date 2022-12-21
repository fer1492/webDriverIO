import homePage from '../pages/home.page';
import DATOS from "../datos/articulos";

describe("Búsqueda de varios articulos: ", function () {
  DATOS.forEach(({ articulo }) => {
    it(`Debería buscar ${articulo}`, async () => {
      addStep('Abre la pagina');
      await homePage.abrir();
      addStep('Busca el articulo que le pasamos por parámetro');
      await homePage.buscar(articulo);
      addStep('Se verifica si el articulo encontrado coincide con el que buscamos');
      await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
    });
  });
});