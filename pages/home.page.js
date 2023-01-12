import BasePage from "../pages/base.page";

class HomePage extends BasePage {

  get volverAlHome(){
    return $('h1 a');
  }

  get barraDeBusqueda() {
    return $('[name="search"]');
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
   *
   * @param {articles} Articulo dado para clickear en el menu
   * @returns El selector clickeado
   */
  async dropDown(articles){
    const selectorDropDown = await $(`//a[text()="${articles}"]`).click();
    return selectorDropDown;
  }

  /**
   *
   * @param {articleProduct} el producto para clickear dentro del menu
   * @returns El producto dentro del menu clickeado
   */
  async ingresarDropDown(articleProduct){
    const selectorProduct = await $(`//a[contains(text(),"${articleProduct}")]`).click();
    return selectorProduct;
  }

  /**
   * Clickear para volver al home despues para finalizar el test.
   */
    async volverHome(){
      await $('h1 a').click();
    }
}
export default new HomePage();
