import { Page } from '@playwright/test';

//constructor(private page: Page) {} es una forma de declarar e inicializar una propiedad privada llamada "page" en la clase SelectPage. Esto permite que la instancia de SelectPage tenga acceso a la página de Playwright para interactuar con ella en los métodos de la clase.
export class SelectPage {
  constructor(private page: Page) {}


  //crear el primer metodo para ir a la página de Novus Technology
  //seleccionar departamento
  async Departamento(departamento: string) {
  const select = this.page.locator('#department');
  await select.waitFor({ state: 'visible' });

  await select.selectOption({ label: departamento });
}

  //seleccionar ciudad
  async Ciudad(ciudad: string) {
    const select = this.page.locator('#city');
    await this.page.waitForFunction(() => {
      const citySelect = document.querySelector('#city') as HTMLSelectElement;
      return citySelect && citySelect.options.length > 1; // Espera a que el select tenga opciones cargadas
    })
    await select.selectOption({ label: ciudad });
  }

  //seleccionar un Comandos de Selenium
    async Comando() {
    const select = this.page.locator('#commands');
    await select.waitFor({ state: 'visible' }); 
    await select.selectOption({ label: 'Navigation Commands' });
  }
}

