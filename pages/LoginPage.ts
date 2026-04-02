import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(user: string, pass: string) {
    await this.page.getByPlaceholder('Username').fill(user);
    await this.page.getByPlaceholder('Password').fill(pass);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async visualizaDashboard() {
    // Espera a que el logo de la aplicación sea visible para confirmar que el login fue exitoso
    await this.page.waitForSelector('.app_logo');
    // Puedes agregar una aserción aquí para verificar que el logo es visible, lo que indicaría que el usuario ha llegado al dashboard
    const texto= await this.page.locator('.app_logo').textContent();
  }
}