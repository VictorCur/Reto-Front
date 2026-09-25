# Informe de estrategia de automatización

## 1. Objetivo
El objetivo de esta automatización es validar el flujo principal de compra de Sauce Demo, cubriendo desde la autenticación hasta la confirmación final del pedido. La suite busca comprobar que la aplicación cumple con los requisitos funcionales más relevantes del negocio y que la regresión queda protegida con escenarios ejecutables y mantenibles.

## 2. Alcance cubierto
Se automatizaron los escenarios clave del recorrido del usuario:
- Inicio de sesión con usuario válido.
- Validación de credenciales inválidas.
- Bloqueo de usuario.
- Adición de productos al carrito.
- Verificación del contenido del carrito.
- Proceso de checkout.
- Confirmación final de compra.

## 3. Patrón de diseño utilizado
Se aplicó el patrón Page Object Model (POM) para encapsular la lógica de interacción con cada pantalla. Este enfoque ayuda a:
- separar la responsabilidad entre negocio y UI,
- reutilizar acciones comunes,
- reducir duplicación en los step definitions,
- facilitar el mantenimiento cuando cambian selectores o flujos.

Cada página tiene una clase específica y los pasos de Cucumber delegan en esas clases, manteniendo los escenarios legibles y centrados en el comportamiento.

## 4. Arquitectura de la solución
La estructura del proyecto está organizada por capas:
- features/: escenarios Gherkin en lenguaje natural.
- src/pages/: representaciones de cada pantalla de la aplicación.
- src/steps/: traducción de los escenarios a acciones automatizadas.
- src/support/: hooks, World y configuración transversal de Cucumber/Playwright.
- src/config/: centralización de datos de prueba y valores de entorno.

Esto permite una solución escalable y acorde con buenas prácticas de automatización funcional.

## 5. Cucumber + Gherkin
Se utiliza Cucumber para modelar la lógica de negocio mediante Gherkin, lo que permite expresar casos de prueba en un formato cercano a requisitos y validación del negocio. Esto mejora la comprensión del suite tanto para QA como para stakeholders no técnicos.

Se mantiene una estructura clara del tipo:
- Given: preparación del contexto
- When: ejecución de la acción
- Then: verificación del resultado

El uso de lenguaje natural en los escenarios ayuda a documentar el comportamiento sin depender de implementaciones internas.

## 6. Buenas prácticas aplicadas
Se incorporaron prácticas clave para mantener alta calidad técnica:
- Centralización de la URL base y credenciales en variables de entorno.
- Evitación de hardcode dentro de los steps y escenarios.
- Separación de responsabilidades entre páginas, pasos y soporte.
- Reutilización de lógica y componentes para reducir duplicación.
- Manejadores de hooks para limpieza y captura de evidencias en fallos.
- Configuración centralizada en [src/config/testData.ts](../src/config/testData.ts) con plantilla en [.env.example](../.env.example).

Estas decisiones reducen el riesgo de errores al mantener la suite y fortalecen la escalabilidad del proyecto.

## 7. Datos y configuración
La configuración del entorno se gestionó de forma centralizada para evitar valores repetidos y sensibles embebidos en la lógica de prueba. La cadena base se lee desde variables de entorno, facilitando la ejecución en distintos entornos sin modificar el código fuente.

## 8. Cobertura de calidad
La suite valida tanto casos positivos como negativos, lo cual es esencial para asegurar robustez en la automatización. La combinación de escenarios exitosos y escenarios de error permite detectar fallos funcionales pero también problemas de seguridad y validación de flujo.

## 9. Resultado y conclusión
La implementación ofrece una base sólida para automatizar pruebas funcionales end-to-end con Playwright y Cucumber siguiendo un patrón profesional y mantenible. El diseño POM, la separación de responsabilidades, la configuración centralizada y la cobertura de flujo principal hacen que esta solución sea apropiada para un reto de QA Automation y para una entrega con nivel de calidad de entrevista o evaluación técnica.

En la validación final de ejecución, la suite ha quedado estable con 8 escenarios y 57 pasos ejecutados correctamente.
