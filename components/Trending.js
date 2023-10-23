import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function Trending() {
  return (
    <div className="hidden lg:flex items-center font-bold flex-col ml-7 mt-4">
      Trending
      <div
        className="flex space-x-3 bg-white bg-opacity-10
        w-[300px] h-[44px] p-3 rounded-3xl"
      >
        <SearchIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent
            focus:outline-none
            placeholder:text-gray-600"
          placeholder="Search"
        />
      </div>
      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">What's happening</h1>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">Isreal</h1>
          <p className="text-xs text-gray-500">500k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">Donald Trump</h1>
          <p className="text-xs text-gray-500">70k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">Elon Musk</h1>
          <p className="text-xs text-gray-500">100k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">election</h1>
          <p className="text-xs text-gray-500">60k Tweets</p>
        </div>
      </div>
      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Who to follow</h1>

        <div className="flex justify-between p-3">
          <div className="flex space-x-3 p-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/Obama.jpg"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Barack Obama</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@BarackObama</h1>
            </div>
          <button className="bg-white text-black text-sm w-20 
          rounded-3xl font-bold h-8">Follow</button>
          </div>

        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3 p-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/Kylie.png"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Kylie Jenner</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@KylieJenner</h1>
            </div>
          <button className="bg-white text-black text-sm w-20 
          rounded-3xl font-bold h-8">Follow</button>
          </div>

        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3 p-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="../assets/elon.jpg"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Elon Musk</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@ElonMusk</h1>
            </div>
          <button className="bg-white text-black text-sm w-20 
          rounded-3xl font-bold h-8">Follow</button>
          </div>

        </div>
      </div>
    </div>
  );
}
