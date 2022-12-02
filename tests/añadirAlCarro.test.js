
describe('Carrito', () => {
  it('Debería añadir el articulo al carro', async () => {
    await browser.url('/');
    let barraDeBusqueda = await $('[name="search"]');
    await barraDeBusqueda.setValue('iphone');
    await browser.pause(4000);
    await barraDeBusqueda.keys('Enter');
    await $('.img-responsive').click();
    await browser.pause(4000);
    await $('#button-cart').click();
    await browser.pause(4000);
  });
});
