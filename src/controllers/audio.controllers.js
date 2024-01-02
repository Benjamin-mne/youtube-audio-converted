import ytdl from 'ytdl-core'

async function getAudioBuffer (url) {
  const audioStream = ytdl(url, { quality: 'highestaudio' })
  const chunks = []
  for await (const chunk of audioStream) {
    chunks.push(chunk)
  }

  return Buffer.concat(chunks)
}

export const getAudioInfo = async (req, res) => {
  const { url } = req.body
  if (!url) {
    res.status(400).send('URL incorrecta.')
    return
  }
  try {
    const videoInfo = await ytdl.getInfo(url)
    res.send(videoInfo.videoDetails)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error interno del servidor.')
  }
}

export const downloadAudio = async (req, res) => {
  const { url } = req.body
  if (!url) {
    res.status(400).send('URL incorrecta.')
    return
  }
  try {
    const audioBuffer = await getAudioBuffer(url)
    res.setHeader('Content-Type', 'audio/mpeg')
    res.send(audioBuffer)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error interno del servidor.')
  }
}
