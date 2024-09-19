Prueba Técnica React - Nivel Junior
Proyecto: App de Recetas Favoritas
Descripción

Esta aplicación permite a los usuarios buscar, guardar y gestionar recetas de cocina. Los usuarios pueden realizar búsquedas a través de una API pública, ver los detalles de las recetas, marcarlas como favoritas y gestionar su colección de recetas guardadas. El proyecto se enfoca en el uso de useReducer, useMemo, y Context API para la gestión eficiente del estado de la aplicación.
Características Funcionales
1. Búsqueda de Recetas

    Los usuarios pueden buscar recetas por nombre o ingredientes, utilizando una API pública de recetas como TheMealDB o Spoonacular.
    Los resultados de la búsqueda se muestran en una lista que incluye:
        Nombre del plato
        Imagen del plato
        Botón para ver detalles de la receta.

2. Detalles de Recetas

    Al seleccionar una receta, se muestra una vista detallada con:
        Ingredientes
        Instrucciones de preparación
        Botón para agregar o eliminar de favoritos.

3. Gestión de Recetas Favoritas

    Se usa useReducer para gestionar el estado de las recetas favoritas, implementando acciones como:
        AGREGAR_FAVORITA
        ELIMINAR_FAVORITA
        LIMPIAR_FAVORITAS
    Las recetas marcadas como favoritas estarán disponibles en cualquier parte de la aplicación, gracias a Context API.

4. Filtrado de Recetas

    Los usuarios pueden filtrar las recetas por categorías como "Desayuno", "Almuerzo", "Cena", etc.
    Se incluye un botón para restablecer los filtros aplicados.

5. Optimización con useMemo

    Se implementa useMemo para optimizar el rendimiento de la aplicación, especialmente para:
        Memorizar los resultados de búsqueda.
        Filtrar las recetas favoritas.

6. Persistencia Local

    Las recetas favoritas se almacenan en localStorage, lo que permite mantener las recetas guardadas entre sesiones.

Requisitos Técnicos

    Uso adecuado de useReducer para gestionar el estado de recetas y favoritos.
    Implementación de Context API para compartir el estado de las recetas en toda la aplicación.
    Utilización de useMemo para optimizar cálculos derivados, como búsquedas y filtrados.
    La aplicación debe estar dividida en componentes claros y organizados.
    El diseño debe ser responsivo y fácil de usar.

Puntos Extras (Opcional)

    Custom Hook: Creación de un hook personalizado para manejar la búsqueda o la gestión de favoritos.
    Scroll Infinito o Paginación: Implementar una funcionalidad de scroll infinito o paginación si se encuentran muchas recetas.
    Validaciones: Validar que la búsqueda tenga parámetros antes de enviar la petición a la API.

Instrucciones para Ejecutar el Proyecto

    Clonar el Repositorio

    bash

git clone https://github.com/tu-usuario/app-recetas-favoritas.git

Instalar Dependencias
Entra en el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

bash

npm install

Variables de Entorno
Configura las variables de entorno para acceder a la API pública de recetas. Crea un archivo .env en la raíz del proyecto y define las siguientes variables:

makefile

REACT_APP_API_KEY=tu_clave_api
REACT_APP_API_URL=https://www.themealdb.com/api/json/v1/1

Iniciar la Aplicación
Ejecuta la aplicación localmente con el siguiente comando:

bash

npm start

Construir para Producción
Para crear una versión de producción:

bash

    npm run build

Tecnologías Utilizadas

    React (useReducer, useMemo, Context API)
    API Pública de Recetas (TheMealDB o Spoonacular)
    localStorage para la persistencia de datos.
    CSS/Styled Components para estilos responsivos.

Contribuciones

Las contribuciones son bienvenidas. Para contribuir, por favor abre un issue o envía un pull request.