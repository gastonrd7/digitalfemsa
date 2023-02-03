# App con React Native, corriendo con expo cli.

## Tecnologia utilizada
- React-native Expo
- TypeScript
- Patrón flux (react-redux): para manejo de estado global
- Jest (test)
- React-navigation
- Axios: para las llamadas http y el manejo de la comunicación asincrónica con la Api
- Font: para poder cargar fuentes no nativas.

## Demo

https://user-images.githubusercontent.com/12037109/213883982-379b87d6-eb9c-401c-8df9-677e9601d0b3.mp4

## Pre-requisitos para la maquina donde se correra la app react-native

### node y npm
Debemos tener instalado node en nuestra maquina.
El link de descarga es el siguiente [Descarga de Node](https://nodejs.org/es/download/).

Actualizar con la ultima version de npm corriendo `npm i -g npm@latest`.

### git
Debemos tener instalado git en nuestra maquina para poder clonar el repositorio.
El link de descarga es el siguiente [Descarga de Git](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git).

### Versiones recomendadas
node v16.14.2 (no obligatorio).

Nota: Para cambiar las versiones de node se puede utilizar nvm.

## Pre-requisitos para el celular donde se correra la app react-native

### Expo Go

Instale la aplicación [Expo Go](https://expo.dev/client) en su teléfono iOS o Android y conéctese a la misma red inalámbrica que su computadora.

En Android, use la aplicación Expo Go para escanear el código QR desde su terminal para abrir su proyecto. En iOS, use el escáner de código QR incorporado en la cámara de iOS.


## Clonar, instalar y ejecutar la app

### Clonar

En mac se debe clonar el repositorio por SSH y se debe tener la ssh-key incorporada en tu maquina y cargada en tu perfil de github previamente.

Para saber mas de esto [Generando tu clave pública SSH](https://git-scm.com/book/es/v2/Git-en-el-Servidor-Generando-tu-clave-p%C3%BAblica-SSH).

En windows se puede hacer el clone por HTTPS.

### Intalar

`npm i`

### Ejecutar la app

`npx expo start`

Escanear de la forma previamente explicada con el celular el QR que aparecera en la terminal.

## Pantallas de la app en Iphone
<p>
<img height="auto" width="220" src="https://user-images.githubusercontent.com/12037109/213882848-edbbc206-0ea5-416e-b53b-80c5ebeee21a.jpeg" alt="bit.dev" title="Home" loading="lazy" />

<img height="auto" width="220" src="https://user-images.githubusercontent.com/12037109/213882859-750dae17-3581-41bc-9a71-b59fcd83137b.jpeg" alt="bit.dev" title="Ganados" loading="lazy" />

<img height="auto" width="220" src="https://user-images.githubusercontent.com/12037109/213883251-f8d6afa3-97b1-4924-b0ca-f1cb3549fc0d.jpeg" alt="bit.dev" title="Canjeados" loading="lazy" />

<img height="auto" width="220" src="https://user-images.githubusercontent.com/12037109/213883261-a2fde167-91cb-4dc5-9b5c-7b48212a3517.jpeg" alt="bit.dev" title="Detalle" loading="lazy" />
</p>

## Pantallas de la app en Android
<p>
<img height="auto" width="220" src="https://user-images.githubusercontent.com/12037109/213883565-021548be-9e1d-4b3e-8da2-4294abb24f6b.jpg" alt="bit.dev" title="Home" loading="lazy" />

<img height="auto" width="220" src="https://user-images.githubusercontent.com/12037109/213883577-55c09473-6f3e-46ca-8ec7-cf07d3c9706b.jpg" alt="bit.dev" title="Ganados" loading="lazy" />

<img height="auto" width="220" src="https://user-images.githubusercontent.com/12037109/213883591-f7ed3b11-951a-4f10-a467-f6118d32009e.jpg" alt="bit.dev" title="Canjeados" loading="lazy" />

<img height="auto" width="220" src="https://user-images.githubusercontent.com/12037109/213883602-1f073d5a-6562-4f3f-a4a9-9ed6584a9849.jpg" alt="bit.dev" title="Detalle" loading="lazy" />
</p>



