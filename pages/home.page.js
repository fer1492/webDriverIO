import BasePage from "../pages/base.page";

const BUSQUEDA= '[name="search"]';
const FOOTER = 'footer' ;
const SELECCIONAR_COLOR = 'select';
const PULSAR_ENTER = 'Enter';

class HomePage extends BasePage {

  get barraDeBusqueda() {
    return $(BUSQUEDA);
  }
  get footer(){
    return $(FOOTER);
  }

  get dropDownColor(){
    return $(SELECCIONAR_COLOR);
  }

  async buscar(articulo) {
    addStep(`Vaciar el campo escribir el nombre del articulo y apretar enter para enviarlo: ${articulo}`)
    await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
    await this.barraDeBusqueda.keys(PULSAR_ENTER);
  }

  async obtenerTextoBusqueda() {
    addStep('Obtener texto de la barra de búsqueda');
    return await this.barraDeBusqueda.getValue();
  }
}
export default new HomePage();
