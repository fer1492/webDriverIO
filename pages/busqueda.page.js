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
    await $('/html/body/div[2]/div/div/div[1]/div[2]/div[2]/div/button').click();
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
    await $('#cart > ul > li:nth-child(2) > div > p > a:nth-child(1) > strong > i').click()
  }

}
export default new BusquedaPage();