import { Router } from 'express'
import { downloadAudio, getAudioInfo } from '../controllers/audio.controllers.js'

const audioRoutes = Router()

audioRoutes.post('/audio', getAudioInfo)

audioRoutes.post('/audio/download', downloadAudio)

export default audioRoutes
