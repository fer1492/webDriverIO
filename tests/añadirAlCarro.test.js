import homePage from "../pages/home.page";
import busquedaPage from "../pages/busqueda.page";


describe('Carrito', () => {
  it('Debería añadir el articulo al carro', async () => {
    addStep('Ingresa al sitio web');
    await homePage.abrir("/");
    addStep('Busca iphone');
    await homePage.buscar('iphone');
    addStep('Ingresa al resultado de la busqueda');
    await busquedaPage.ingresarAlResultado();
    expect (await busquedaPage.iphone.isDisplayed(), 'No se esta mostrando el iphone').to.be.true;
    addStep('Ingresa el producto al carrito');
    await busquedaPage.ingresarAlProducto();
    expect(await busquedaPage.iphoneResult.isDisplayed(), 'No se ha ingresado al producto seleccionado').to.be.true;
    addStep('Hace click en el boton del carrito y se despliega el menu con los detalles del mismo');
    await busquedaPage.ingresarAlCarrito();
    addStep('Ingresa al carrito');
    await busquedaPage.mostrarCarrito();
    addStep('Verifica que el producto este en el carrito');
    expect(await busquedaPage.productoId.isDisplayed(), 'El producto seleccionado no se encuentra dentro del carrito').to.be.true;
    addStep('Regresa al home');
    expect(await homePage.volverAlHome.isDisplayed(), 'No se muestra el boton Your Store para volver al home').to.be.true;
    await homePage.volverHome();
  });
});