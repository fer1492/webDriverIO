import BasePage from "../pages/base.page";
const INGRESO_RESULTADO = ".img-responsive";
const BTN_AGREGAR_AL_CARRO = '#button-cart';


class BusquedaPage extends BasePage {

  async ingresarAlResultado() {
    addStep(`Ingresar al resultado de la búsqueda`);
    await $(INGRESO_RESULTADO).click();
  }

  async ingresarAlProducto(){
    addStep(`Ingresar el producto al carrito`);
    await $(BTN_AGREGAR_AL_CARRO ).click();
  }

  async obtenerNombreResultado() {
    addStep(`Obtener el texto del resultado de la busqueda`)
    return await this.resultado.getText();
  }
}
export default new BusquedaPage();