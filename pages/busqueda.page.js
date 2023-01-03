import BasePage from "../pages/base.page";

class BusquedaPage extends BasePage {

  get iphone(){
    return $('//a[text()="iPhone"]');
  }

  get iphoneResult(){
    return $('//h1[text()="iPhone"]');
  }

  get productoId(){
    return $('//td[text()="product 11"]')
  }

  get iMac(){
    return $('//a[text()="iMac"]')
  }

  /**
   * Ingresa al producto que se ha buscado
   */
  async ingresarAlResultado() {
    await $(".img-responsive").click();
  }

  /**
   * Ingresa el producto al carrito
   */
  async ingresarAlProducto(){
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
    await $('strong i').click()
  }

}
export default new BusquedaPage();