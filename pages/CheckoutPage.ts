import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  // Método para llenar la información de checkout
  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Zip/Postal Code').fill(postalCode);
    await this.page.getByRole('button', { name: 'Continue' }).click();
    // await this.page.pause(); // Pausa para verificar que la información se haya llenado correctamente
  }

  // Método para finalizar la compra
  async finish() {
    await this.page.getByRole('button', { name: 'Finish' }).click();
  }

  // Método para verificar que la orden se completó exitosamente
  async isOrderComplete() {
    await this.page.waitForSelector('.complete-header');
    return this.page.locator('.complete-header').isVisible();
  }
}
