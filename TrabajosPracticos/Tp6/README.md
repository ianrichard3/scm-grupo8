# Documento de Reglas de Estilo
Un documento de **buenas prácticas y/o reglas de estilo de código** para JavaScript con React, CSS y HTML, utilizando ESLint, tiene como objetivo mantener la consistencia, claridad y calidad del código. Aquí tienes una estructura sugerida:

## 1. **Configuración de ESLint**
   - Utiliza un archivo de configuración para ESLint (`.eslintrc.json` o `.eslintrc.js`) con las siguientes configuraciones recomendadas:
     - Extiende `eslint:recommended` y `plugin:react/recommended`.
     - Si utilizas Prettier para formatear el código, añade `eslint-plugin-prettier` y configura ESLint para que funcione en conjunto con Prettier.
     - Activa las reglas específicas para React Hooks usando `eslint-plugin-react-hooks`.
     - Configura el entorno para ES6, Node y Browser.

     ```json
     {
       "extends": ["eslint:recommended", "plugin:react/recommended", "prettier"],
       "plugins": ["react", "react-hooks"],
       "rules": {
         "react/prop-types": "off",
         "react/react-in-jsx-scope": "off"
       },
       "env": {
         "es6": true,
         "browser": true,
         "node": true
       }
     }
     ```

## 2. **Convenciones de Nombres**
   - Utiliza **camelCase** para variables y funciones:
     ```javascript
     const userName = 'Anael';
     const getUserName = () => userName;
     ```
   - Usa **PascalCase** para los nombres de componentes de React:
     ```javascript
     function UserProfile() {
       return <div>Perfil del usuario</div>;
     }
     ```
   - Mantén los nombres de archivos para componentes en **PascalCase**: `UserProfile.js`.
   - Los archivos de utilidades o helpers deben estar en **camelCase**: `formatDate.js`.

## 3. **Estructura de Carpeta**
   Organiza tu proyecto con una estructura clara, como la siguiente:
   ```
   src/
   ├── components/
   ├── hooks/
   ├── utils/
   ├── styles/
   └── App.js
   ```
   - `components/`: Contiene todos los componentes reutilizables.
   - `hooks/`: Contiene hooks personalizados.
   - `utils/`: Funciones de ayuda o lógica que no están vinculadas a un componente específico.
   - `styles/`: Archivos CSS o SCSS para estilos globales o por componentes.

## 4. **Componentes de React**
   - Usa **componentes funcionales** en lugar de clases, y preferiblemente con **Hooks**.
   - Cada componente debe tener una **única responsabilidad**. Si un componente se vuelve grande o complejo, divídelo en varios componentes más pequeños.
   - Usa **PropTypes** o **TypeScript** para la validación de propiedades (opcional si trabajas con un equipo que necesita tipado fuerte):
     ```javascript
     import PropTypes from 'prop-types';
     
     function UserProfile({ name, age }) {
       return (
         <div>
           <h1>{name}</h1>
           <p>{age} años</p>
         </div>
       );
     }
     
     UserProfile.propTypes = {
       name: PropTypes.string.isRequired,
       age: PropTypes.number.isRequired,
     };
     ```

## 5. **Estilos CSS/SCSS**
   - Usa **CSS Modules** o una librería como **styled-components** para mantener el alcance de los estilos en los componentes y evitar conflictos globales.
     ```javascript
     import styles from './UserProfile.module.css';
     
     function UserProfile() {
       return <div className={styles.profile}>Perfil del usuario</div>;
     }
     ```
   - Nombra las clases CSS con el enfoque **BEM** (Bloque, Elemento, Modificador):
     ```css
     .profile { /* Bloque */ }
     .profile__avatar { /* Elemento */ }
     .profile--large { /* Modificador */ }
     ```

## 6. **Buenas Prácticas en JSX**
   - Mantén el JSX **limpio** y **legible**. Si el renderizado es complejo, separa la lógica en funciones auxiliares.
   - Usa **fragments** cuando no sea necesario un nodo extra en el DOM:
     ```javascript
     return (
       <>
         <Header />
         <Content />
       </>
     );
     ```
   - Asegúrate de que cada componente tenga un **key** único cuando se renderizan listas:
     ```javascript
     return items.map(item => <Item key={item.id} {...item} />);
     ```

## 7. **Funciones y Métodos**
   - Define las **funciones dentro del componente** si no se reutilizarán fuera del mismo, pero evita definir funciones dentro del render si no es necesario.
   - Usa **useCallback** para funciones que se pasen como props, especialmente en componentes con renders frecuentes:
     ```javascript
     const handleClick = useCallback(() => {
       // acción
     }, []);
     ```

## 8. **Manejo de Estados con Hooks**
   - Usa **useState** para manejar el estado local en un componente funcional.
   - Usa **useEffect** para manejar efectos secundarios como la obtención de datos. Recuerda limpiar los efectos cuando sea necesario.
   - Evita dependencias incompletas en los arrays de dependencias de `useEffect`.

## 9. **Optimización del Rendimiento**
   - Evita renders innecesarios utilizando `React.memo` y `useMemo` para memorizar valores o componentes que no deben recalcularse:
     ```javascript
     const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
     ```

## 10. **Accesibilidad**
   - Usa siempre etiquetas HTML semánticas (`<header>`, `<main>`, `<footer>`, `<nav>`, etc.) para mejorar la accesibilidad.
   - Asegúrate de incluir atributos **aria** donde sea necesario para mejorar la navegación con lectores de pantalla:
     ```javascript
     <button aria-label="Cerrar ventana">X</button>
     ```

## 11. **Documentación**
   - Comenta solo el código que realmente lo necesite. Es preferible que el código sea auto-explicativo.
   - Utiliza JSDoc para documentar funciones complejas o utilidades:
     ```javascript
     /**
      * Formatea una fecha a formato local.
      * @param {Date} date - La fecha a formatear.
      * @returns {string} Fecha formateada.
      */
     function formatDate(date) {
       return date.toLocaleDateString();
     }
     ```

## 12. **Versionado y Control de Cambios**
   - Sigue la convención de commits semánticos (**Conventional Commits**):
     - `feat`: Una nueva característica.
     - `fix`: Corrección de errores.
     - `refactor`: Refactorización de código sin cambios funcionales.
     - `style`: Cambios que no afectan el significado del código (espacios, comas, formato, etc.).
     - `docs`: Cambios en la documentación.

## 13. **Pruebas**
   - Escribe **pruebas unitarias** y **pruebas de integración** utilizando herramientas como **Jest** y **React Testing Library**.
   - Usa `describe`, `it` y `expect` para estructurar tus tests:
     ```javascript
     describe('UserProfile', () => {
       it('should render the user name', () => {
         const { getByText } = render(<UserProfile name="Anael" age={28} />);
         expect(getByText('Anael')).toBeInTheDocument();
       });
     });
     ```
