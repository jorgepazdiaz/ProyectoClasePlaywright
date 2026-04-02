import { Page } from '@playwright/test';

//constructor(private page: Page) {} es una forma de declarar e inicializar una propiedad privada llamada "page" en la clase ButtonPage. Esto permite que la instancia de ButtonPage tenga acceso a la página de Playwright para interactuar con ella en los métodos de la clase.
export class ButtonPage {
  constructor(private page: Page) {}


  //crear el primer metodo enviar el formulario
    async EnviarFormulario() {  
    const button = this.page.getByRole('button', { name: 'Enviar' });
    await button.click();
  }
  
}

