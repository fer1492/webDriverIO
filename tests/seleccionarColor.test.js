import homePage from "../pages/home.page";
import busquedaPage from "../pages/busqueda.page";

const appleCinemaSearch = 'apple cinema';
const indexNumberTwo = 2;

describe('Color', () => {
it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {
    addStep('Ingresa al sitio web');
    await homePage.abrir();
    addStep('Hace scroll hasta que se vea el footer');
    await homePage.footer.scrollIntoView();
    addStep('Busca apple cinema');
    await homePage.buscar(appleCinemaSearch);
    addStep('Selecciona el color dos de apple cinema');
    await homePage.dropDownColor.selectByIndex(indexNumberTwo);
});
});