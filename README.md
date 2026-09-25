# Reto QA Automation – FrontEnd

Suite de pruebas automatizadas para Sauce Demo con Playwright y Cucumber.

## Objetivo
Validar el flujo principal de compra del sitio Sauce Demo:
- Inicio de sesión.
- Agregado de productos al carrito.
- Verificación del carrito.
- Checkout completo.
- Confirmación de compra.

## Requisitos
- Node.js 18 o superior.
- npm.
- Navegador Chromium para Playwright.

## Instalación
```bash
npm install
npx playwright install --with-deps chromium
cp .env.example .env
```

## Configuración de entorno
El proyecto centraliza la URL base y las credenciales de prueba en variables de entorno para evitar hardcode dentro de los steps.

Archivo base disponible:
- [.env.example](.env.example)

Variables principales:
- BASE_URL
- STANDARD_USER
- STANDARD_PASSWORD
- LOCKED_USER
- INVALID_PASSWORD

## Ejecución de pruebas
```bash
npm test
```

## Estructura del proyecto
- features/: escenarios Gherkin.
- src/pages/: Page Object Model para cada pantalla.
- src/steps/: step definitions de Cucumber.
- src/support/: hooks y world de Playwright.
- src/config/testData.ts: configuración centralizada de entorno.
- docs/automation-strategy.md: estrategia y patrones utilizados.

## Casos cubiertos
- Inicio de sesión con usuario estándar válido.
- Intento de ingreso con credenciales inválidas.
- Usuario bloqueado.
- Agregado de producto al carrito.
- Verificación de producto en el carrito.
- Checkout hasta confirmación final.

## Patrón utilizado
Se aplicó Page Object Model (POM) con Cucumber y Gherkin para separar la lógica de negocio de la interacción con la interfaz, manteniendo la suite más legible, escalable y mantenible.

## Enlace del repositorio
El proyecto se encuentra en el repositorio actual asociado a la carpeta del workspace y puede subirse o sincronizarse con el remoto configurado en Git.
