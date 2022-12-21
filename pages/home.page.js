import BasePage from "../pages/base.page";

const searchName= '[name="search"]';
const footerSelector = 'footer' ;
const colorSelector = 'select';
const pressEnterKey= 'Enter';

class HomePage extends BasePage {

  get barraDeBusqueda() {
    return $(searchName);
  }
  get footer(){
    return $(footerSelector);
  }

  get dropDownColor(){
    return $(colorSelector);
  }

  /**
   * Busca un articulo dado
   * @param {Object} articulo dado
   */

  async buscar(articulo) {
    await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
    await this.barraDeBusqueda.keys(pressEnterKey);
  }

  async obtenerTextoBusqueda() {
    return await this.barraDeBusqueda.getValue();
  }
}
export default new HomePage();
