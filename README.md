# 🌐 Página Web Educativa sobre Angular

Página web educativa que explica qué es Angular, para qué sirve y sus principales características. Incluye una trivia interactiva con retroalimentación y contador de puntaje.

## 📋 Descripción

Este proyecto es una página web estática desarrollada con HTML, CSS y JavaScript vanilla que tiene como objetivo educar sobre el framework Angular. La página incluye:

- **Introducción a Angular**: Explicación sobre qué es Angular y su historia
- **Para qué sirve**: Casos de uso y aplicaciones prácticas
- **Características y Ventajas**: 8 características principales del framework
- **Trivia Interactiva**: 5 preguntas sobre Angular con retroalimentación inmediata y contador de puntaje

## ✨ Características

- ✅ Diseño moderno y atractivo con gradientes y animaciones
- ✅ **Diseño completamente responsive** (optimizado para móviles, tablets y desktop)
- ✅ **Menú hamburguesa** para dispositivos móviles
- ✅ Trivia interactiva con 5 preguntas sobre Angular
- ✅ Retroalimentación inmediata (correcto/incorrecto)
- ✅ Contador de puntaje en tiempo real
- ✅ Animaciones suaves al hacer scroll
- ✅ Navegación suave entre secciones
- ✅ **Mejoras de accesibilidad** (navegación por teclado, focus states)
- ✅ **Efectos visuales mejorados** (patrones animados, sombras, transiciones)
- ✅ Interfaz intuitiva y fácil de usar
- ✅ **Optimizado para touch** en dispositivos móviles

## 🚀 Cómo usar

### Opción 1: Abrir directamente
1. Descarga o clona este repositorio
2. Abre el archivo `index.html` en tu navegador web

### Opción 2: Servidor local
Si prefieres usar un servidor local, puedes usar:

**Python:**
```bash
python -m http.server 8000
```

**Node.js (con http-server):**
```bash
npx http-server
```

Luego abre `http://localhost:8000` en tu navegador.

## 📁 Estructura del Proyecto

```
WEBeducativa/
│
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos y diseño responsive
├── script.js       # Lógica de la trivia y animaciones
├── vercel.json     # Configuración para Vercel (opcional)
├── .gitignore      # Archivos ignorados por Git
└── README.md       # Este archivo
```

## 🎨 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos, animaciones y diseño responsive
- **JavaScript (ES6+)**: Interactividad y lógica de la trivia
- **Google Fonts (Poppins)**: Tipografía moderna

## 📱 Diseño Responsive

La página está completamente optimizada para:
- 📱 **Móviles pequeños** (320px - 360px)
- 📱 **Móviles** (361px - 480px)
- 📱 **Móviles grandes** (481px - 640px)
- 📱 **Tablets** (641px - 768px)
- 💻 **Tablets grandes** (769px - 1024px)
- 💻 **Desktop** (1025px+)

### Mejoras Responsive Implementadas:
- Menú hamburguesa animado para móviles
- Grids adaptativos que se ajustan automáticamente
- Tipografías escalables según el tamaño de pantalla
- Espaciado optimizado para cada breakpoint
- Touch-friendly en dispositivos móviles
- Mejoras de accesibilidad en todos los tamaños

## 🎯 Funcionalidades de la Trivia

- 5 preguntas sobre Angular
- Retroalimentación visual inmediata (verde para correcto, rojo para incorrecto)
- Contador de puntaje en tiempo real
- Mensaje final personalizado según el rendimiento
- Opción de reiniciar la trivia

## 📝 Preguntas de la Trivia

1. ¿Qué lenguaje de programación utiliza principalmente Angular?
2. ¿Cuál es el comando de Angular CLI para crear un nuevo proyecto?
3. ¿Qué es un componente en Angular?
4. ¿Qué significa SPA en el contexto de Angular?
5. ¿Qué empresa desarrolla y mantiene Angular?

## 🌐 Publicación en Línea

Para publicar el sitio en línea, puedes usar servicios gratuitos como:

- **Vercel**: ⭐ Recomendado - Despliegue rápido y automático
- **GitHub Pages**: Conecta tu repositorio y activa GitHub Pages
- **Netlify**: Arrastra y suelta la carpeta del proyecto
- **Firebase Hosting**: Usa Firebase CLI para desplegar

### 🚀 Desplegar en Vercel (Recomendado)

Vercel es ideal para sitios estáticos como este. Tiene despliegue automático desde GitHub.

#### Opción 1: Desde GitHub (Más fácil)

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/Web-Educativa.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "Add New Project"
   - Selecciona tu repositorio `Web-Educativa`
   - Vercel detectará automáticamente que es un sitio estático
   - Haz clic en "Deploy"
   - ¡Listo! Tu sitio estará disponible en `https://tu-proyecto.vercel.app`

#### Opción 2: Desde la CLI de Vercel

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Despliega:**
   ```bash
   vercel
   ```

3. Sigue las instrucciones en la terminal

#### Características de Vercel:
- ✅ Despliegue automático en cada push a GitHub
- ✅ HTTPS gratuito
- ✅ CDN global para carga rápida
- ✅ Dominio personalizado gratuito
- ✅ Preview deployments para cada PR

### GitHub Pages

1. Sube tu código a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama `main` y la carpeta `/root`
4. Tu sitio estará disponible en `https://tu-usuario.github.io/Web-Educativa`

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

## 🔗 Enlaces

- **Repositorio**: [GitHub](https://github.com/Ezkm2024/Web-Educativa)
- **Sitio en vivo**: [Vercel](https://web-educativa.vercel.app) *(actualiza con tu URL)*

## 👨‍💻 Autor

Desarrollado como proyecto educativo para aprender sobre desarrollo web.

---

**Nota**: Esta página web es puramente educativa y está diseñada para explicar conceptos básicos sobre Angular de manera visual e interactiva.

## 📦 Despliegue

Este proyecto está optimizado para desplegarse en Vercel. Simplemente conecta tu repositorio de GitHub y Vercel detectará automáticamente la configuración necesaria.

