import BasePage from "../pages/base.page";

class BusquedaPage extends BasePage {

  get cartBtn(){
    return $('.form-group #button-cart');
  }
  get success(){
    return $('//div[contains(text(),"Success")]');
  }

  get colorIngresado(){
    return $('//*[@id="input-option217"]/option[3]');
  }

  get selectorProduct(){
  return $('h4 a');
  }
  get productalIngresar(){
  return $('div.col-sm-4 > h1');
  }

  /**
   * Ingresa al producto que se ha buscado
  */
async ingresarAlResultado() {
  await $(".img-responsive").click();
  }

/**
 *
 * @param {String} productName
 * @returns producto buscado
 */
async product(productName){
    const product = $(`//a[text()="${productName}"]`);
    return product;
  }
  /**Devuelve el nombre del producto en base al que busquemos
   * @param {String} productResultName nombre del resultado del producto buscado
   * @returns selector
   */
  async productResult(result){
    const selectorProductResult = await $(`[//h1[text()="${result}"]]`);
    return selectorProductResult;
  }


  /**
   * Ingresa el producto al carrito
   */
  async ingresarElProducto(){
    await $('.form-group #button-cart').click();
  }

/**
 * Hace click en el boton para ver el carrito
 */
  async ingresarAlCarrito(){
    await $('#cart-total').click();
  }

  /**
   * Ingresa al carrito
   */
  async mostrarCarrito(){
    await $('strong .fa-shopping-cart').click()
  }
}
export default new BusquedaPage();