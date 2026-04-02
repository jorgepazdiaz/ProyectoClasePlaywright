import { Page } from '@playwright/test';

//constructor(private page: Page) {} es una forma de declarar e inicializar una propiedad privada llamada "page" en la clase ClicksPage. Esto permite que la instancia de ClicksPage tenga acceso a la página de Playwright para interactuar con ella en los métodos de la clase.
export class ClicksPage {
  constructor(private page: Page) {}


  //crear el primer metodo para ir a la página de Novus Technology
  //metodo para seleccionar el pasatiempo
  async Pasatiempo() {
    const checkbox = this.page.getByLabel('Deportes');
    await checkbox.waitFor({ state: 'visible' }); 
    await checkbox.click();
  }

  //metodo para seleccionar el género
  async Genero() {
    const radio = this.page.getByLabel('Masculino');
    await radio.waitFor({ state: 'visible' }); 
    await radio.click();
  }

  //metodo para cargar un documento
  async CargarDocumento() {
    const fileInput = this.page.locator('#picture');
    await fileInput.setInputFiles('/Users/jorgepazdiaz/Desktop/Jorge Personal/111.png'); // Reemplaza con la ruta de tu archivo
  }
  
}

