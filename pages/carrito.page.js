import BasePage from "./base.page";

class CarritoPage extends BasePage{

  get productoId(){
    return $('//td[contains(text(),"Product")]')
  }
  /**Devuelve el Id del producto en base al que busquemos
   * @param {String} productResultName Id del resultado del producto buscado
   * @returns selector
   */
  async productId(id){
    const selectorProductId = await $(`//td[text()="${id}"]`);
    return selectorProductId;
  }

}
export default new CarritoPage();