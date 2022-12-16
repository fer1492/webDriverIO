import homePage from "../pages/home.page";

describe('Color', () => {
it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {
    await homePage.abrir("http://opencart.abstracta.us");
    await homePage.footer.scrollIntoView();
    await browser.pause(4000)
    await homePage.buscar('apple cinema');
    await browser.pause(3000);
    await homePage.dropDownColor.selectByIndex(2);
    await browser.pause(3000);
 });
});