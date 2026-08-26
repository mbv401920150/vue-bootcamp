# Contexto del Proyecto: 01-bases (Fundamentos de Vue & TypeScript)

## 📌 Propósito del Proyecto
Este repositorio contiene ejercicios prácticos y progresivos para aprender y dominar las bases de TypeScript y JavaScript moderno (ES6+) como base fundamental para el desarrollo con Vue.js.

## 🛠️ Stack Tecnológico
- **Lenguaje:** TypeScript (~6.0+)
- **Bundler / Dev Server:** Vite 8+
- **Librerías:** Axios (consumo de APIs / peticiones HTTP)
- **Gestor de paquetes:** npm

## 📁 Estructura del Proyecto
- `src/main.ts`: Punto de entrada principal donde se montan los ejercicios mediante imports comentados/descomentados.
- `src/bases/`: Módulos individuales con conceptos específicos numerados correlativamente:
  - `01-const-let.ts` (Variables y constantes)
  - `02-objects.ts` (Objetos y tipos)
  - `03-arrays.ts` (Arreglos y métodos)
  - `04-functions.ts` (Funciones y arrow functions)
  - `05-deses-obj.ts` (Desestructuración de objetos)
  - `06-deses-arr.ts` (Desestructuración de arreglos)
  - `07-imp-exp.ts` (Módulos, importaciones y exportaciones)
  - `08-promises.ts` (Promesas)
  - `09-fetch-api.ts` (Consumo con Fetch API)
  - `10-axios.ts` (Consumo con Axios)
  - `11-async-await.ts` (Manejo asíncrono con Async/Await)
- `src/interfaces/`: Definiciones de interfaces y tipos TypeScript para datos y respuestas HTTP.
- `src/data/`: Datos estáticos o mocks para ejercicios.

## 📐 Convenciones y Pautas de Desarrollo
1. **Tipado Estricto:** Siempre tipar explícitamente variables, parámetros de funciones, retornos e interfaces de respuestas de API.
2. **Idioma:** Código e identificadores consistentes con el curso; comentarios y explicaciones en **español**.
3. **Didáctica:** Cuando se agregue o modifique código, incluir comentarios breves y claros explicando el concepto que se está practicando.
4. **Nomenclatura:** Mantener el prefijo numérico correlativo en `src/bases/` (ej. `12-interfaces.ts`, `13-generics.ts`, etc.) para nuevos ejercicios.
5. **No Sobrescribir Ejercicios:** Al crear un nuevo ejercicio, crear un nuevo archivo en `src/bases/` y actualizar la referencia en `src/main.ts` sin borrar los ejercicios previos.

## 🚫 Carpetas Ignoradas y Restricciones
- **No inspeccionar ni modificar:** `node_modules/`, `dist/`, `dist-ssr/`, `.idea/`, `.vscode/`, archivos `.log` o temporales.
- El alcance de trabajo y código fuente se limita estrictamente a `src/`, `index.html` y la configuración en la raíz (`package.json`, `tsconfig.json`, etc.).

## 🤖 Directrices para el Asistente AI
- Responde siempre en español.
- Explica los conceptos paso a paso con un enfoque pedagógico.
- Proporciona ejemplos concisos y claros listos para ejecutarse en el entorno Vite.
- Centra las respuestas y análisis únicamente en el código fuente (`src/`).

