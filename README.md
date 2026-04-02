## Ejemplo de escenario (Gherkin)

```gherkin
Feature: Login

   Scenario: Login básico
      Given ingreso a la página
      When hago login con usuario "standard_user" y password "secret_sauce"
      Then debería ver el dashboard
```
# Proyecto Playwright con Cucumber

Este proyecto automatiza pruebas end-to-end usando [Playwright](https://playwright.dev/) y [Cucumber.js](https://cucumber.io/).

## Requisitos previos

- Node.js >= 16.x
- npm >= 8.x

## Instalación

1. Clona el repositorio o descarga el código fuente.
2. Instala las dependencias:

   ```bash
   npm install
   ```

## Estructura del proyecto Utilizando Page Object Model

- `pages/` — Page Objects (ej: LoginPage)
- `tests/features/` — Archivos feature de Cucumber (Gherkin)
- `tests/steps/` — Definiciones de pasos (step definitions)
- `tests/hooks/` — Hooks de Cucumber
- `utils/` — Utilidades y contexto (World)
- `playwright.config.ts` — Configuración de Playwright
- `cucumber.js` — Configuración de Cucumber.js


## Feature principal

```gherkin
Como cliente de Sauces Demo
Quiero poder iniciar sesión, agregar productos al carrito y completar una compra
Para poder adquirir los productos que necesito
```

## Ejecución de pruebas

### Ejecutar todas las pruebas

```bash
npx cucumber-js
```

### Ejecutar pruebas con reporte HTML de Playwright

```bash
npx playwright test --reporter=html
```

El reporte se genera en la carpeta `playwright-report/`.

### Ejecutar pruebas específicas

Puedes filtrar escenarios usando tags o nombres de features:

```bash
npx cucumber-js --tags "@login"
```

## Generar reporte de Cucumber

El reporte JSON se genera en `reports/cucumber-report.json` tras la ejecución.

## Notas adicionales

- Modifica la URL base en `LoginPage.ts` si necesitas apuntar a otro entorno.
- Puedes personalizar la configuración en `playwright.config.ts` y `cucumber.js`.

## Recursos útiles

- [Documentación Playwright](https://playwright.dev/docs/intro)
- [Documentación Cucumber.js](https://github.com/cucumber/cucumber-js)

---

¡Listo para automatizar tus pruebas!
