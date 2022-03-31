import waterfall from '../../../videos/waterfall.mp4'
import audio from '../../../audio/audio.mp3'
import france1 from '../../../pictures/france1.jpg'


export let messages = [
  
    { type: "text", from: "you", time: "10:00", content: "Hello" },
    { type: "text", from: "me", time: "10:01", content: "Hello" },
    { type: "text", from: "me", time: "10:02", content: "Hellodsadasdasdas" },
    { type: "image", from: "you", time: "10:03", content: france1 },
    { type: "voice", from: "you", time: "10:04", content: audio },
    { type: "video", from: "you", time: "10:05", content: waterfall },
  ];