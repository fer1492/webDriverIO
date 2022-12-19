const PAGE_TIMEOUT = 10000;

export default class BasePage {
  async abrir(ruta) {
    addStep(`Abrir sitio web: ${ruta}`)
    await browser.url(`${ruta}`);
  }

  async clickearElemento(elemento) {
    addStep(`Click en el elemento: ${elemento}`)
    await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
    await elemento.click();
  }

  async vaciarCampoYEnviarTexto(elemento, texto) {
    await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
    addStep(`Vaciar campo, hacer click en el elemento: ${elemento} y escribir el texto: ${texto}`);
    await elemento.clearValue();
    await elemento.click();
    await elemento.keys(texto);
  }
}
