# YouTube Audio Downloader API

Esta API permite a los usuarios obtener detalles de un video de YouTube dado su URL y descargar el audio del video en formato MP3.

## Características

Obtención de detalles del video: Proporciona información detallada sobre un video de YouTube, como título, descripción, autor, etc.

Descarga de audio en formato MP3: Permite a los usuarios descargar el audio de un video de YouTube en formato MP3 de alta calidad.

## Instalación y Uso
Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```
Instalar las dependencias:
```bash
npm install
```
Iniciar el servidor:
```bash
npm dev
```

## Rutas de la API
`POST /audio`: Obtener detalles de un video de YouTube. Se debe enviar la URL del video en el cuerpo de la solicitud.

`POST /audio/download`: Descargar el audio de un video de YouTube en formato MP3. Se debe enviar la URL del video en el cuerpo de la solicitud.

## Aprende más con mi Tutorial Paso a Paso
Si deseas comprender cómo construimos esta API desde cero, te invito a leer el artículo detallado en mi blog donde desglosamos cada paso del proceso de desarrollo.

[¡Ver el artículo en mi blog!]()

