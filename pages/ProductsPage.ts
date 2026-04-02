import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async AgregarElPrimerProductoAlCarrito() {
    // Agrega el primer producto visible al carrito
    await this.page.locator('.inventory_item button').first().click();
  }

  async IrAlCarrito() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
