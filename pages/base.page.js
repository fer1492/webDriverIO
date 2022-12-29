const PAGE_TIMEOUT = 10000;

export default class BasePage {
  /**
   * Abre el url en el navegador
   * @param {String} url a acceder 
   */
  async abrir(ruta) {
    await browser.url(`${ruta}`);
  }

  /**
   * Clickea en un elemento
   * @param {Object} elemento al cuál se le hace click
   */
  async clickearElemento(elemento) {
    await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
    await elemento.click();
  }

  /**
   *Vacia el campo y envia un texto en formato string
   * @param {Object} elemento a vaciar
   * @param {String} texto a envíar
   */
  async vaciarCampoYEnviarTexto(elemento, texto) {
    await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
    await elemento.clearValue();
    await elemento.click();
    await elemento.keys(texto);
  }
}
