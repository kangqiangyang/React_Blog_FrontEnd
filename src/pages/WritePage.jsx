import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";

function WritePage() {
  const [SelectedImg, setSelectedImg] = useState(false);
  const [PostImg, setPostImg] = useState("");
  const [PostTitle, setPostTitle] = useState("");
  const [PostDescription, setPostDescription] = useState("");

  const setPostImage = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = (readEvent) => {
        setPostImg(readEvent.target.result);
        setSelectedImg(true);
      };
    }
  };
  return (
    <div className="max-w-7xl p-4 mx-auto w-full h-screen flex flex-col gap-3">
      {SelectedImg && (
        <img
          src={PostImg}
          alt=""
          className="cursor-pointer w-full object-cover h-[30%] rounded-lg hover:scale-105 transform ease-out duration-150"
        />
      )}

      <form
        action=""
        className="flex flex-col w-full h-screen gap-5 items-center justify-between"
      >
        <div className="flex items-center w-full">
          <label htmlFor="InputFile">
            <GrAddCircle className="cursor-pointer  text-3xl" />
          </label>
          <input type="file" id="InputFile" hidden onChange={setPostImage} />
          <input
            value={PostTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className=" bg-transparent px-3 w-full py-4 outline-none border-b text-3xl placeholder:text-3xl mx-3"
          />
          <button className="py-2 px-4 rounded-lg text-white ml-10 font-bold bg-green-600 hover:bg-green-500 active:bg-green-400">
            Publish
          </button>
        </div>

        <textarea
          value={PostDescription}
          onChange={(e) => setPostDescription(e.target.value)}
          placeholder="Input You Descrition"
          className="h-full w-full bg-transparent placeholder:text-xl text-xl outline-none border p-4"
        />
      </form>
    </div>
  );
}

export default WritePage;
