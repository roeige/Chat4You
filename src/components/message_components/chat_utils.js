import waterfall from "../../videos/waterfall.mp4";
import audio from "../../audio/audio.mp3";
import france1 from "../../pictures/france1.jpg";
import { Fragment } from "react";
import avatar from "../../pictures/avatar.png";

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

export const getLastMessage = (data) => {
  if (data.length === 0) return "";
  const lastMessage = data[data.length - 1];
  if (lastMessage.type === "image")
    return (
      <Fragment>
        <i class="bi bi-image" /> Photo
      </Fragment>
    );
  if (lastMessage.type === "voice")
    return (
      <Fragment>
        <i class="bi bi-mic-fill"></i> Voice
      </Fragment>
    );
  if (lastMessage.type === "video")
    return (
      <Fragment>
        <i class="bi bi-play-fill"></i> Video
      </Fragment>
    );
  if (lastMessage.type === "text") return lastMessage.content;
};

export const getTimeAgo = (data) => {
  if (data.length === 0) return "";
  const date = data[data.length - 1].date;
  const now = Math.round(new Date().getTime() / 1000);
  const dateUTC = Math.round(date.getTime() / 1000);
  let diff = now - dateUTC;
  const day = Math.round(diff / (24 * 3600));

  diff = Math.round(diff % (24 * 3600));
  const hour = Math.round(diff / 3600);

  diff = Math.round(diff % 3600);
  const minutes = Math.round(diff / 60);

  diff = Math.round(diff % 60);
  if (day && day > 1 && day < 7) return day + " days ago";
  if (day && day > 1 && day >= 7) {
    return dateToString(date);
  }
  if (day === 1) return day + " day ago";
  if (hour && hour > 1) return hour + " hours ago";
  if (hour === 1) return hour + " hour ago";
  if (minutes && minutes > 1) return minutes + " minutes ago";
  if (minutes === 1) return minutes + " minute ago";
  return "now";
};

export const dateToTime = (date) => {
  return (
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0")
  );
};

export const dateToString = (date) => {
  const month = date.getUTCMonth() + 1; //months from 1-12
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return (
    String(day).padStart(2, "0") +
    "/" +
    String(month).padStart(2, "0") +
    "/" +
    year
  );
};


export const app_data = {
  oriel: {
    password: "orielgg",
    displayName: "Oriel Zehavi",
    picture: avatar,
    contacts: [
      {
        username: "roeigh",
        displayName: "Roei Gehasi",
        picture : avatar,
        messages: [
          {
            type: "text",
            from: "you",
            date: new Date(2022, 2, 4, 5, 50),
            content: "Bye",
          },
          {
            type: "text",
            from: "me",
            date: new Date(2022, 2, 4, 5, 50),
            content: "Hi",
          },
          {
            type: "text",
            from: "me",
            date: new Date(2022, 2, 4, 5, 50),
            content: "Sup",
          },
        ],
      },
    ],
  },
  roeigh: {
    password: "roeigg",
    displayName: "Roei Gehasi",
    picture: avatar,
    contacts: [
      {
        username: "oriel",
        displayName: "Oriel Zehavi",
        picture : avatar,
        messages: [
          {
            type: "text",
            from: "me",
            date: new Date(2022, 2, 4, 5, 50),
            content: "Bye",
          },
          {
            type: "text",
            from: "you",
            date: new Date(2022, 2, 4, 5, 50),
            content: "Hi",
          },
          {
            type: "text",
            from: "you",
            date: new Date(2022, 2, 4, 5, 50),
            content: "Sup",
          },
        ],
      },
    ],
  },
  "test":{
    password: "roeigg",
    displayName: "Test User",
    picture: avatar,
    contacts: [
      
      ]
    }
};
