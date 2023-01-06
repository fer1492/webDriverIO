import BasePage from "../pages/base.page";

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

  get featureHome(){
    return $('h3');
  }


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
   * @returns Obtiene el valor de volver al home
   */
  async volverHome(){
    return await this.volverAlHome.getValue();
  }

}
export default new HomePage();
