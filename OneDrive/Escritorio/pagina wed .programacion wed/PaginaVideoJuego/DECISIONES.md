# 🎮 Gaming Pulse: Portal de Noticias de Videojuegos

##  Análisis de Proyecto: Portal de Publicaciones de Videojuegos

### 1. ¿Quién usa el sistema? (Actores)
Para un portal de contenido básico, identificamos tres perfiles clave:
* **Visitante (Lector):** Usuarios interesados en videojuegos que consumen el contenido (noticias, reseñas, guías) sin necesidad de registrarse.
* **Administrador / Editor:** La persona (tú) que gestiona el sitio, redacta las publicaciones, sube imágenes y organiza las categorías.
* **Sistema Externo (Opcional):** APIs de redes sociales (para compartir contenido) o servicios de hosting de imágenes.

### 2. ¿Qué necesita hacer? (Acciones principales)
Nos enfocamos en la funcionalidad pura, sin pensar aún en el código:
* **Lectura de contenido:** El visitante debe poder listar las publicaciones más recientes y leer una publicación completa.
* **Gestión de publicaciones:** El administrador debe poder Crear, Leer, Actualizar y Eliminar (CRUD) artículos.
* **Categorización:** El sistema debe permitir filtrar publicaciones por plataforma (PC, PS5, Xbox, Switch) o género.
* **Búsqueda:** Permitir al usuario encontrar temas específicos mediante palabras clave.

### 3. ¿Qué datos maneja? (Información)
Aquí definimos el "corazón" de tu base de datos o estructura de archivos:
* **Entrada:** Títulos de artículos, cuerpo de texto (Markdown o HTML), imágenes de portada, etiquetas (tags), fecha de publicación y credenciales de acceso para el administrador.
* **Transformación:** El sistema toma el texto plano y lo formatea para la web; organiza las listas de artículos de forma cronológica descendente.
* **Salida:** Páginas HTML renderizadas, feeds de noticias, resultados de búsqueda y mensajes de confirmación de publicación.

### 4. ¿Qué restricciones existen? (Reglas de negocio)
Estas son las "fronteras" de tu proyecto para no perder el enfoque:
* **Seguridad:** Solo el administrador autenticado puede crear o borrar contenido; el visitante es estrictamente de "solo lectura".
* **Formato:** Las imágenes no deben exceder un peso específico (ej. 2MB) para mantener la velocidad de carga.
* **Simplicidad:** Al ser una página "básica", no se incluirán sistemas de comentarios complejos ni perfiles de usuario para visitantes en esta primera fase.
* **Responsividad:** El sitio debe ser legible tanto en computadoras como en dispositivos móviles.

---
##  Decisiones Técnicas: IA vs. Estudiante

A continuación, se presentan las decisiones tomadas durante el desarrollo de este portal, comparando el enfoque de una IA/Senior con el de un estudiante:

### Decisiones Técnicas de la IA (Enfoque Senior)
1. **Arquitectura de Estado Centralizado:** Se utiliza un array de objetos en JavaScript como "fuente de verdad". Esto permite que los filtros y la gestión de contenido se sincronicen sin errores, facilitando futuras conexiones a bases de datos reales.
2. **Persistencia con LocalStorage:** Se implementó el almacenamiento local para asegurar que los datos no se pierdan al refrescar la página, simulando el comportamiento de un servidor.
3. **Layout con CSS Grid y Flexbox:** Uso de CSS Grid para la estructura global (sidebar vs content) y Flexbox para componentes internos, garantizando un diseño responsivo profesional.



### Decisiones Técnicas del Estudiante (Enfoque Formativo)
1. **Manipulación Directa del DOM:** Uso de `innerHTML` para renderizar las tarjetas, permitiendo aprender cómo el código afecta visualmente a la página de forma inmediata.
2. **Validación de Login Simple:** Implementación de seguridad mediante comparaciones de texto plano (`if/else`), ideal para entender la lógica de control de flujo inicial.
3. **Uso de Imágenes vía URL:** Decisión de usar enlaces externos para poblar el sitio rápidamente sin necesidad de configurar un sistema complejo de carga de archivos local.

---

##  Prompt Técnico Estructurado
El código base fue generado mediante el siguiente prompt:

> **Rol:** Desarrollador Web Frontend Senior experto en HTML5/CSS3.  
> **Contexto:** Creación de un CMS de videojuegos con login lateral y feed de noticias.  
> **Tarea:** Generar una estructura de grid con sidebar de acceso y tarjetas de noticias con imágenes.  
> **Restricciones:** Estilo Dark Mode, sin frameworks externos, uso de JavaScript Vanilla y Flexbox/Grid.  
> **Formato:** Archivos separados para HTML, CSS y JS.

---

