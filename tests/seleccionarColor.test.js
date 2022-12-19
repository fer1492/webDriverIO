import homePage from "../pages/home.page";

const APPLE_CINEMA = 'apple cinema';
const INDICE_DOS= 2;

describe('Color', () => {
it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {
    await homePage.abrir();
    await homePage.footer.scrollIntoView();
    await homePage.buscar(APPLE_CINEMA);
    await homePage.dropDownColor.selectByIndex(INDICE_DOS);
});
});