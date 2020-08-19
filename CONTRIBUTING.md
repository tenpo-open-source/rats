# Contribuyendo al proyecto

De antemano te damos gracias por querer participar de este proyecto. Creemos que entre todos podemos avanzar a mejorarlo. Cualquier crítica o mejora a este proceso puedes contactarnos a través de los canales que dejaremos en este documento. Lo responderemos a la brevedad. 
¡¡Bienvenid@!!

### Contenidos
 - [Código de Conducta](#coc)
 - [¿Encontraste un error?](#issue)
 - [Mejoras](#feature)
 - [Proceso de contribución](#submit)

## <a name="coc"></a> Código de conducta
Si quieres colaborar revisa nuestro [Código de Conducta](https://github.com/tenpo-open-source/code-of-conduct).


## <a name="issue"></a> ¿Encontraste un error?
Si encontraste un error por favor crear un *Issue* en nuestro proyecto principal. [Click acá](https://github.com/tenpo-open-source/rats/issues/new)

## <a name="feature"></a> Mejoras
Si crees que tienes una idea que puede aportar o quieres solicitar una mejora en el repositorio crea un *Issue* con tu solicitud.
[Click acá](https://github.com/tenpo-open-source/rats/issues/new)

## <a name="submit"></a> Guía de contribución

### <a name="submit-issue"></a> Genera un Issue

Cualquier contribución es considerada como una mejora o una solución a un error por lo cuál el primer paso para la contribución es crear un Issue.
Antes de crear un Issue por favor revisa si este ya fue reportado así no duplicamos información.

Si tu contribución esta resolviendo un error agrega a la descripción del Issue un ejemplo de como reproducir el caso de error.

### <a name="create-fork"></a> Crea un fork

Por favor crea un fork cuando quieras aportar al proyecto. Luego nos envías un  [Pull Request](#pull-request)


### <a name="create-branch"></a> Crea una rama con un identificador de su propósito

Por favor sigue estas directrices para el nombre de las ramas

```
  <identificador>/<descripcion>
```

Ejemplos:

```
  feature/descripcion
  bugfix/descripcion
  ci/descripcion
```

##### Identificador
Se considera obligatorio para el nombre de las ramas ya que definirá el tipo de aumento de versión basado en [Semantic Versioning](https://semver.org/). 
Valores posibles:
  - `feature`: Representa una nueva funcionalidad.
  - `bugfix`: Representa un error que será solucionado.
  - `docs`: Se agrega o edita la documentación.
  - `ci`: Representa alguna mejora o edición del Pipeline de este proyecto configurado a través de Circle Ci.
  - `test`: Representa una mejora exclusivamente relacionada a pruebas de software (las pruebas de software también deberían ser creadas en los features y bugfixes). Un ejemplo de esto podría ser agregar cobertura, cambiar ejecutor de pruebas, solucionar problemas en las pruebas y más.
  - `chore`: Representa cualquier tarea ajena a las descritas anteriormente. Por ejemplo actualizar las dependencias del proyecto.
 
##### Descripción

Cualquier nombre separado por el caractér `-` que represente en que se quiere colaborar.

Tanto `identificador` como `descripcion` deben ser preferentemente en lenguaje inglés. 
 
### <a name="pull-request"></a> 

Una vez que hayas completado el proceso y tu código esté listo debes crear un Pull Request a través del siguiente link. [Click Acá](https://github.com/tenpo-open-source/rats/compare)
Fijarse que al lado izquierdo debemos seleccionar este repositorio `tenpo-open-source/rats` en la rama `master` y al lado derecho `tuUsuarioDeGithub/rats` en la rama `scope/description` creada siguiendo las pautas descritas en el punto anterior.

Para que tu Pull Request sea aceptado debe cumplir con pasar todo el proceso de Integración Continua sin errores.

### Muchas gracias

En [Tenpo](https://www.tenpo.cl) creemos que podemos aportar a la comunidad open source y a través de estos proyectos queremos hacerlo. Te damos infinitas gracias por ayudarnos en esto.