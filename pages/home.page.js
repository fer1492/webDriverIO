import BasePage from "../pages/base.page";

const homeBtn = 'h1 a';

class HomePage extends BasePage {

  get volverAlHome(){
    return $('h1 a');
  }

  get barraDeBusqueda() {
    return $('[name="search"]');
  }
  get footer(){
    return $('footer');
  }

  get dropDownColor(){
    return $('select');
  }

  /*get productoCarrito(){
    return $('#button-cart');
  }*/

  /**
   * Busca un articulo dado
   * @param {Object} articulo dado
   */
  async buscar(articulo) {
    await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
    await this.barraDeBusqueda.keys('Enter');
  }

/**
  *
  * @returns Obtiene el texto de la barra de busqueda
  */
  async obtenerTextoBusqueda() {
    return await this.barraDeBusqueda.getValue();
  }

  /**
   *
   * @returns Obtiene el nombre del producto buscado en el carrito
   */
  async obtenerTextoBusquedaCarrito(){
    return await this.productoCarrito.getValue();
  }

  /**
   * Vuelve al home clcikeando en el boton Your Store
   */
  async volverHome(){
    await $(homeBtn).click();
  }

}
export default new HomePage();
