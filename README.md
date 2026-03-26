# Blog Personal Minimalista – Alan López

Este proyecto es una base para crear tu blog personal con un estilo minimalista inspirado en la estética de Apple. Está construido con **React** y **Vite**, y utiliza un enrutador basado en hash (`HashRouter`) para permitir que la navegación funcione correctamente cuando despliegues en GitHub Pages.

## 🎨 Diseño

- **Header** fijo con avatar y menú de navegación.
- **Hero** en la página de inicio con tu nombre, título profesional y tagline.
- Sección de **Selected Work** para destacar proyectos o artículos clave.
- Sección **Latest Writing** para mostrar las entradas más recientes.
- Páginas independientes para **About**, **Portfolio** y **Blog**.
- **Footer** simple con enlaces a redes sociales.
- Paleta de colores definida en `src/App.css`. Puedes cambiar las variables CSS para personalizar la apariencia.

## 📁 Estructura de carpetas

```
alan-blog/
├── index.html            # Página base donde se monta la app
├── package.json          # Definición de dependencias y scripts
├── vite.config.js        # Configuración de Vite
├── README.md             # Este documento
└── src/
    ├── App.jsx           # Componente principal con las rutas
    ├── App.css           # Estilos globales y variables de color
    ├── main.jsx          # Punto de entrada de la aplicación
    ├── assets/
    │   └── avatar.png    # Imagen de avatar de ejemplo (puedes sustituirla)
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── SelectedWork.jsx
    │   └── LatestWriting.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Portfolio.jsx
        └── Blog.jsx
```

## 🛠️ Instalación y ejecución local

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior) y `npm`.
2. Descarga o clona este repositorio en tu máquina.
3. Abre una terminal en la raíz del proyecto y ejecuta:

   ```bash
   npm install
   ```

   Este comando instalará las dependencias listadas en `package.json`. Requiere conexión a internet para descargar los paquetes.

4. Para iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Esto abrirá la aplicación en `http://localhost:5173` (o el puerto que indique la consola). Los cambios en los archivos se reflejarán automáticamente gracias a **Vite**.

5. Para generar una versión optimizada para producción:

   ```bash
   npm run build
   ```

   El resultado se guardará en la carpeta `dist/`.

6. Para revisar la versión de producción localmente:

   ```bash
   npm run preview
   ```

## 🚀 Despliegue en GitHub Pages

Para publicar tu blog con un dominio gratuito de GitHub (`https://tuusuario.github.io`):

1. Crea un repositorio público llamado `tuusuario.github.io`, sustituyendo `tuusuario` por tu nombre de usuario en GitHub.
2. Copia todos los archivos de este proyecto (excepto `node_modules` y `dist`) en el repositorio.
3. Ejecuta `npm run build` para generar la carpeta `dist/` con los archivos estáticos.
4. Copia el contenido de `dist/` en la raíz del repositorio (o configúralo para que GitHub Pages sirva desde la carpeta `dist`).
5. Haz commit y push de los cambios a la rama `main`.
6. Activa GitHub Pages en la configuración del repositorio, seleccionando la rama `main` (o la carpeta `dist/` si la dejas como subcarpeta).

Tras unos minutos, tu sitio estará disponible en `https://tuusuario.github.io`. Como se utiliza `HashRouter`, la navegación funcionará correctamente al recargar en cada ruta.

## 🔧 Personalización

- Sustituye `avatar.png` con tu propia foto en `src/assets/avatar.png`.
- Actualiza los enlaces de tus redes sociales en los componentes `Hero.jsx`, `Footer.jsx` y `About.jsx`.
- Añade o edita proyectos en `SelectedWork.jsx` y `Portfolio.jsx`.
- Crea nuevas entradas de blog agregando objetos al array en `LatestWriting.jsx` o `Blog.jsx`.
- Modifica la paleta de colores cambiando las variables CSS en `src/App.css`.
- Cambia el contenido de cada página (`About.jsx`, `Portfolio.jsx`, `Blog.jsx`) para reflejar tu historia y experiencia real.

## 📄 Licencia

Este proyecto se proporciona como plantilla educativa y puede ser modificado y utilizado libremente para fines personales y profesionales.
