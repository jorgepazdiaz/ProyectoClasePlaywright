import { Before, After } from '@cucumber/cucumber';
import '../../utils/world'; // Asegúrate de que el CustomWorld se registre correctamente

Before(async function () {
  await this.init();
});

After(async function () {
  await this.close();
});