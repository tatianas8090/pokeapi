# Pokedex 

El presente trabajo se realiza con el fin de convertirse en un metodo de aprendizaje para un proceso educativo, donde lo ideal es poner en practica los temas aprendidos mediante la utilizacion de una API como lo es la de pokemon, que nos permite integrar los circuito internos de la API de pokemon para poderlo hacer funcional y visible mediante la realizacion de la presente pokedex. 

Las funcionalidades de esta pokedex, es poder integrar la API de pokemon en mi propia pagina. Donde se visualizan 150 pokemones que se extraen de la informacion que tiene la API, adicional al equipo de pokemon seleccionado y la barra de busquedad de todos los pokemones. Esto mediante un menu hamburguesa.  

En este proyecto se dan los primero pasos en Angular, donde se empieza a trabajar en este warframe como fin de conocerlo y poder trabajar en el. 

-	Se requiere de la creacion de componentes y servicios para poder empezar a realizar el proyecto. 

-	Adicional se debe crear carpetas con la imágenes que se van a utilizar y configurar los estilos necesarios y definidos para la realizacion de este proyecto. 

Para entender de una forma mas clara vamos a definir que es : 

-	API REST 

Una API es un conjunto de reglas que determinan cómo las aplicaciones o los dispositivos pueden conectarse y comunicarse entre si. Una API REST es una API que se ajusta a los principios de diseño de REST, un estilo de arquitectura también denominado transferencia de estado representacional. Por este motivo, las API REST son a veces denominadas API RESTful. 

-	fetch/Axios. 

Fetch es el nombre de una nueva API para Javascript con la cuál podemos realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verbose. La forma de realizar una petición es muy sencilla, básicamente se trata de llamar a fetch y pasarle por parámetro la URL de la petición a realizar. 

Axios es un Cliente HTTP basado en promesas para node.js y el navegador. Es isomorfico (= puede ejecutarse en el navegador y nodejs con el mismo código base). En el lado del servidor usa el modulo nativo http de node.js, mientras que en el lado del cliente (navegador) usa XMLHttpRequests. 

Axios por otro lado es una libreria de javascript . Hay que en importarla en nuestro proyecto por cdn o instalarla. Al igual que fetch, axios se basa en promises. Si vamos a hacer una petición GET, sólo debemos llamar al método desde axios agregandole ..get(url)  

se crean 4 componentes y dos servicios,los cuales se dividen de la siguiente manera: 

- El primer componente es el header, mediante el cual se da una pequeña introduccion a la pokedex; Con mi logo y el menu hamburguesa que nos permite el desplegue de la pokedex. 

-El segundo componente es el equipo, donde se evidencia los pokemones de mi preferencia los cuales hacen parte de mi equipo y el lider. 

-El tercer componente es llamado pokedex es el que nos permite realizar una busqueda de todos los pokemones y mediante el cual se logra conecta la api, mediante un servicio llamado pokedex. 

-el cuarto y ultimo componente pokemones, nos muestra los 150 pokemones que tenemos en lista con sus respectivas cualidades de igual forma conectando la api con el servicio pokemones. 

  

Para el desarrollado de esta pokedex utilizamos TypeScript, servicios, componentes, imagenes y lo mas importate la conexion de la api en nuestra pagina. 
