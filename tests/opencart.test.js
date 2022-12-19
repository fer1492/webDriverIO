import homePage from '../pages/home.page';
import DATOS from "../datos/articulos";

describe("Búsqueda de varios articulos: ", function () {
  DATOS.forEach(({ articulo }) => {
    it(`Debería buscar ${articulo}`, async () => {
      await homePage.abrir();
      await homePage.buscar(articulo);
      await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
    });
  });
});