import { db } from "@/firebase";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function TweetInput() {
  const user = useSelector((state) => state.user);

  const [text, setText] = useState("");

  async function sendTweet() {
    const docRef = await addDoc(collection(db, "posts"), {
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      uid: user.uid,
      timestamp: serverTimestamp(),
      likes: [],
      tweet: text
    });

    setText("")
  }
  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700">
      <img className="w-11 h-11 rounded-full object-cover" src="/guy.jpg" />

      <div className="w-full">
        <textarea
          placeholder="What is happening?!"
          className="bg-transparent resize-none outline-none w-full 
            min-h-[50px] text-lg"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <div className="flex justify-between border-t border-gray-700 pt-4">
          {/* icons div*/}
          <div className="flex space-x-0">
            <div className="iconAnimation">
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
          </div>

          <button 
          onClick={sendTweet}
          disabled= {!text}
          className="bg-[#1d9bf0] rounded-full px-4 py-1.5
          disabled:opacity-50"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
