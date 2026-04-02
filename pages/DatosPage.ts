import { Page } from '@playwright/test';

//constructor(private page: Page) {} es una forma de declarar e inicializar una propiedad privada llamada "page" en la clase DatosPage. Esto permite que la instancia de DatosPage tenga acceso a la página de Playwright para interactuar con ella en los métodos de la clase.
export class DatosPage {
  constructor(private page: Page) {}


  //crear el primer metodo para ir a la página de Novus Technology
  async NavegaWeb() {
    await this.page.goto('https://novustechnology.pe/practice-form/', {
        waitUntil: 'domcontentloaded'
    });
  }

  //crear el segundo metodo para ingresar los datos personales
  async DatosNombre(nombre: string) {
    const input = this.page.getByPlaceholder('Nombre');
    await input.waitFor({ state: 'visible' }); 
    await input.fill(nombre);
  }

  async DatosApellido(apellido: string) {
    const input = this.page.getByPlaceholder('Apellido');
    await input.waitFor({ state: 'visible' }); 
    await input.fill(apellido);
  }

    async DatosCorreo(correo: string) {
    const input = this.page.getByPlaceholder('name@example.com');
    await input.waitFor({ state: 'visible' }); 
    await input.fill(correo);
  }

  async DatosTelefono(telefono: string) {
    const input = this.page.getByPlaceholder('Número de Teléfono');
    await input.waitFor({ state: 'visible' }); 
    await input.fill(telefono);
  } 
}

