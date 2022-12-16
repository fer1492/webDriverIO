import homePage from '../pages/home.page';
import DATOS from "../datos/articulos";
import busquedaPage from "../pages/busqueda.page";


 describe("Búsqueda", function () {
   DATOS.forEach(({ articulo }) => {
     it(`Debería buscar ${articulo}`, async () => {
       await homePage.abrir("http://opencart.abstracta.us");
       await homePage.buscar(articulo);
       await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
     });
   });
 });