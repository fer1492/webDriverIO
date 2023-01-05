import BasePage from "../pages/base.page";

class BusquedaPage extends BasePage {
  
  get buttonCart(){
    return $(' #product #button-cart') ;
  }
  
  get success(){
    return $('//div[contains(text(),"Success")]');
  }
  
  get productoId(){
    return $('//td[contains(text(),"product")]')
  }

  /**
   * Ingresa al producto que se ha buscado
  */
 async ingresarAlResultado() {
   await $(".img-responsive").click();
  }
  
  /**Devuelve el nombre del producto en base al que busquemos
   * @param {String} productName nombre del producto buscado
   * @returns selector
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

  /**Devuelve el Id del producto en base al que busquemos
   * @param {String} productResultName Id del resultado del producto buscado
   * @returns selector
   */
  async productId(id){
    const selectorProductId = await $(`//td[text()="${id}"]`);
    return selectorProductId;
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