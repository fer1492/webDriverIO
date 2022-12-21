import BasePage from "../pages/base.page";

const articleImg = ".img-responsive";
const addToCartButton = '#button-cart';


class BusquedaPage extends BasePage {

  async ingresarAlResultado() {
    await $(articleImg).click();
  }

  async ingresarAlProducto(){
    await $(addToCartButton).click();
  }

  async obtenerNombreResultado() {
    return await this.resultado.getText();
  }
}
export default new BusquedaPage();