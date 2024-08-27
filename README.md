# Documento de Gestión de Configuración
El presente documento tiene como objetivo establecer los lineamientos a seguir para la gestión de la configuración del proyecto, a lo largo del desarrollo de la materia Ingeniería y calidad de software.
El documento de gestión de configuración se encuentra en el directorio raíz del repositorio y por una disposición del repositorio remoto que estamos utilizando debe de llamarse "README.md". De esta manera se puede tener siempre visible el documento de gestión de configuración de una forma rápida y sencilla.

## Estructura de directorios
Hemos propuesto la siguiente distribución de directorios pensando en el desarrollo de la materia y en la forma que tenemos nosotros para prepararnos para un parcial.

```
├──Bibliografia
├──MaterialDeClase
│   ├── UnidadX
├──Lineamientos
├──TrabajosPrácticos
    ├──TPX
├──TrabajosConceptuales
├──Resúmenes
    ├── ParcialX
```

## Listado de ítems de configuración

| Tipo               | Prefijo | Extensión          | Ubicación                          |
|--------------------|---------|--------------------|------------------------------------|
| Bibliografía       | BIBLIO  | PDF                | /Bibliografía                      |
| Presentación       | PRES    | PDF, PPTX          | /MaterialDeClase/UnidadX           |
| Toma de Notas      | NOTAS   | DOCX, PDF, PNG     | /MaterialDeClase/UnidadX           |
| Ejercicio práctico | EJER    | DOCX, PDF, PNG     | /MaterialDeClase/UnidadX           |
| Lineamiento        | LIN     | PDF                | /Lineamientos                      |
| Trabajo Práctico   | TP      | DOCX, PDF          | /TrabajosPrácticos/TPX             |
| Trabajo Conceptual | TC      | DOCX, PDF          | /TrabajosConceptuales              |
| Resúmen            | RES     | DOCX, PDF          | /Resúmenes/ParcialX                |
| Guía               | GUIA    | PDF                | /TrabajosPrácticos                 |


### Genérica
Formato: `<<prefijoItem>>_<<nombreItem>>.<<ext>>`

### Específicas
- **Resumen:** El prefijo incluye el autor del resumen.
  - Ejemplo: `RES_Nico_ResumenPrimerParcial.pdf`
- **Toma de Notas:** El prefijo incluye el autor de la toma de notas.
  - Ejemplo: `NOTAS_Nico_NotasClaseSCM.pdf`





## Glosario

## Criterio de Línea Base

## Enlace al repositorio
Para el control de versiones se utilizará el sistema de control de versiones distribuido [Git](https://git-scm.com/).
El repositorio se encuentra alojado en [GitHub](https://github.com/ianrichard3/scm-grupo8.git)
