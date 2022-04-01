import waterfall from '../../../videos/waterfall.mp4'
import audio from '../../../audio/audio.mp3'
import france1 from '../../../pictures/france1.jpg'


export const messages = [
  
    { type: "text", from: "you", time: "10:00", content: "Hello" },
    { type: "text", from: "me", time: "10:01", content: "Hello" },
    { type: "text", from: "me", time: "10:02", content: "Hellodsadasdasdas" },
    { type: "image", from: "you", time: "10:03", content: france1 },
    { type: "voice", from: "you", time: "10:04", content: audio },
    { type: "video", from: "you", time: "10:05", content: waterfall },
  ];

  export const defaultPicture = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-person-circle"
      viewBox="0 0 16 16"
    >
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path
        fill-rule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
      />
    </svg>
  );

  export const getLastMessage = data => {
    if(data.length === 0) return "";
    const lastMessage = data[data.length-1];
    if(lastMessage.type === "image") return "Photo";
    if(lastMessage.type === "voice") return "Audio";
    if(lastMessage.type === "video") return "Video";
    if(lastMessage.type === "text") return lastMessage.content;
  };

  export const contacts = [
    {
      name: "Charlie Baz",
      messagesData : [
        { type: "text", from: "you", time: "10:00", content: "Hello" },
    { type: "text", from: "me", time: "10:01", content: "Hello" },
    { type: "text", from: "me", time: "10:02", content: "Hellodsadasdasdas" },
    { type: "image", from: "you", time: "10:03", content: france1 },
    { type: "voice", from: "you", time: "10:04", content: audio },
    { type: "video", from: "you", time: "10:05", content: waterfall },
      ],
      get lastMessage() {return getLastMessage(this.messagesData)},
      timeAgo: 1,
      picture: defaultPicture,
    },
    {
      name: "Bob Bar",
      messagesData : [
        { type: "text", from: "you", time: "10:00", content: "Bye" },
    { type: "text", from: "me", time: "10:01", content: "Hi" },
    { type: "text", from: "me", time: "10:02", content: "Sup" },
    
      ],
      get lastMessage() {return getLastMessage(this.messagesData)},
      timeAgo: 1,
      picture: defaultPicture,
    },

    
    
  
  ];