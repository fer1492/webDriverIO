import BasePage from "./base.page";

class MenuPage extends BasePage{
  get desktops(){
    return $('//a[text()="Desktops"]');
  }
  get mac(){
    return $('//a[contains(text(),"Mac (")]');
  }

  async ingresarDesktops(){
    await $('//a[text()="Desktops"]').click();
  }
  async ingresarAmac(){
    await $('//a[contains(text(),"Mac (")]').click();
  }
  async obtenerMac(){
    return await this.mac.getValue();
  }
  async verProducto(){
    await $('h4');
  }
}
export default new MenuPage;