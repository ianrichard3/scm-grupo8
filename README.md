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

| Tipo               | Regla de nombrado | Extensión          | Ubicación                          |
|--------------------|---------|--------------------|------------------------------------|
| Bibliografía       | BIBLIO_<<nombreItem>>.<<ext>>  | PDF                | /Bibliografía                      |
| Presentación       | PRES_<<nombreItem>>.<<ext>>    | PDF, PPTX          | /MaterialDeClase/UnidadX           |
| Toma de Notas      | NOTAS_<<nombreItem>>.<<ext>>   | DOCX, PDF, PNG     | /MaterialDeClase/UnidadX           |
| Ejercicio práctico | EJER_<<nombreItem>>.<<ext>>    | DOCX, PDF, PNG     | /MaterialDeClase/UnidadX           |
| Lineamiento        | LIN_<<nombreItem>>.<<ext>>     | PDF                | /Lineamientos                      |
| Trabajo Práctico   | TP_<<nombreItem>>.<<ext>>      | DOCX, PDF          | /TrabajosPrácticos/TPX             |
| Trabajo Conceptual | TC_<<nombreItem>>.<<ext>>      | DOCX, PDF          | /TrabajosConceptuales              |
| Resumen            | RES_<<nombreItem>>.<<ext>>     | DOCX, PDF          | /Resúmenes/ParcialX                |
| Guía               | GUIA_<<nombreItem>>.<<ext>>    | PDF                | /TrabajosPrácticos                 |
| Imagen               | IMG_<<nombreItem>>.<<ext>>    | PNG, JPG                | *                 |

* Puede estar ubicado en cualquier carpeta

### Regla de nombrado

**Reglas Específicas**
- **Resumen:** El prefijo incluye el autor del resumen.
  - Ejemplo: `RES_Nico_ResumenPrimerParcial.pdf`
- **Toma de Notas:** El prefijo incluye el autor de la toma de notas.
  - Ejemplo: `NOTAS_Nico_NotasClaseSCM.pdf`

* Los items de tipo imagen pueden estar ubicados en cualquier carpeta


## Glosario

|Sigla | Descripción|
|---|---|
|TP| Trabajo Práctico|
|ICS | Ingeniería y Calidad de Software|
|SCM| Gestión de Configuración del Software|
|RA| Requerimientos Ágiles|
|PP| Proceso y Producto|
|US| User Stories|

## Criterio de Línea Base
Se establecerá una línea base luego de la entrega presencial de cada parcial, la cual se encontrará en la rama “main” del repositorio. 
Decidimos utilizar este criterio ya que consideramos un punto de validación de que hemos adquirido correctamente el conocimiento en la materia.

## Enlace al repositorio
Para el control de versiones se utilizará el sistema de control de versiones distribuido [Git](https://git-scm.com/).
El repositorio se encuentra alojado en [GitHub](https://github.com/ianrichard3/scm-grupo8.git): https://github.com/ianrichard3/scm-grupo8.git
