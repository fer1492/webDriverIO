describe('Color', () => {
it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {
    await browser.url('/');
    let footer = await $('footer');
    await footer.scrollIntoView();
    await browser.pause(4000)
    let barraDeBusqueda = await $('[name="search"]');
    await barraDeBusqueda.setValue('apple cinema');
    await browser.pause(3000);
    await barraDeBusqueda.keys('Enter');
    await browser.pause(3000);
    let seleccionarProducto = await $('img');
    await seleccionarProducto.click();
    await browser.pause(3000);
    let dropDownColor = await $('select');
    await dropDownColor.selectByIndex(2);
    await browser.pause(3000);
 });
});