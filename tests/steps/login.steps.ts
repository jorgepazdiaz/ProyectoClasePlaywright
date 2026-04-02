import { Given, When, Then } from '@cucumber/cucumber';
//llamamos a las clases de las páginas
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { expect } from '@playwright/test';

//declaramos las variables para las páginas
let loginPage: LoginPage;
let productsPage: ProductsPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

//usamos los pasos de Cucumber para definir las acciones y validaciones
Given('ingreso a la página', async function () {
    // Inicializamos las páginas con el contexto de Playwright
  loginPage = new LoginPage(this.page);
  productsPage = new ProductsPage(this.page);
  cartPage = new CartPage(this.page);
  checkoutPage = new CheckoutPage(this.page);

  //llamamos al primer metodo de LoginPage para navegar a la página
  await loginPage.navigate();
});

When('hago login con usuario {string} y password {string}', async function (user, pass) {
  await loginPage.login(user, pass);
});

Then('debería ver el dashboard', async function () {
  await loginPage.visualizaDashboard();
});

When('agrego un producto al carrito', async function () {
  await productsPage.AgregarElPrimerProductoAlCarrito();
});

When('voy al carrito', async function () {
  await productsPage.IrAlCarrito();
});

When('realizo el checkout', async function () {
  await cartPage.checkout();
  // Datos de ejemplo para el checkout
  await checkoutPage.fillInformation('Juan', 'Pérez', '12345');
  await checkoutPage.finish();
});

Then('debería ver la confirmación de compra', async function () {
  const isComplete = await checkoutPage.isOrderComplete();
  expect(isComplete).toBeTruthy();
});