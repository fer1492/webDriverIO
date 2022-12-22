import BasePage from "../pages/base.page";

const articleImg = ".img-responsive";
const addToCartButton = '#button-cart';
const carritoBtn = '//*[@id="product-product"]/div[1]/a[2]';


class BusquedaPage extends BasePage {

  async ingresarAlResultado() {
    await $(articleImg).click();
  }

  async ingresarAlProducto(){
    await $(addToCartButton).click();
  }

  async ingresarAlCarrito(){
    await $(carritoBtn).click();
  }

  async obtenerNombreResultado() {
    return await this.resultado.getText();
  }
}
export default new BusquedaPage();