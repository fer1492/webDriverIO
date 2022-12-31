import BasePage from "./base.page";

class MenuPage extends BasePage{
  get desktops(){
    return $('/html/body/div[1]/nav/div[2]/ul/li[1]/div/div/ul/li[2]/a');
  }
  get mac(){
    return $('//*[@id="content"]/div[2]/div/div/div[2]/div[1]/h4/a');
  }

  async ingresarDesktops(){
    await $('//*[@id="menu"]/div[2]/ul/li[1]').click();
  }
  async ingresarAmac(){
    await $('//*[@id="menu"]/div[2]/ul/li[1]/div/div/ul/li[2]/a').click();
  }
  async obtenerMac(){
    return await this.mac.getValue();
  }
  async verMac(){
    await $('#content > div:nth-child(3) > div > div > div.image > a > img');
  }
}
export default new MenuPage;