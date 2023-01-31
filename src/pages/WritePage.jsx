import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GrAddCircle } from "react-icons/gr";
import { Context } from "../context/Context";
import axios from "axios";

function WritePage() {
  const [SelectedImg, setSelectedImg] = useState(false);
  const [PostImg, setPostImg] = useState("");
  const [file, setFile] = useState(null);
  const [PostTitle, setPostTitle] = useState("");
  const [PostDescription, setPostDescription] = useState("");
  const { user } = useContext(Context);
  const [Categories, setCategories] = useState();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const category = await axios
        .get("https://react-blog-api-ilfm.onrender.com/api/category")
        .then((res) => setCategories(res.data.category));

      return category;
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title: PostTitle,
      description: PostDescription,
      username: user.username,
      categories: category,
    };
    if (file) {
      const formData = new FormData();
      const filename = file.name;
      formData.append("file", file);
      formData.append("filename", filename);
      newPost.photo = filename;

      try {
        await axios.post(
          "https://react-blog-api-ilfm.onrender.com/api/upload",
          formData
        );
      } catch (error) {}
    }
    try {
      const res = await axios.post(
        `https://react-blog-api-ilfm.onrender.com/api/posts`,
        newPost
      );
      window.location.replace(`/posts/${res.data.savePosts._id}`);
      // console.log(res.data);
    } catch (error) {}
  };

  const setPostImage = (e) => {
    setFile(e.target.files[0]);

    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = (readEvent) => {
        setPostImg(readEvent.target.result);
        setSelectedImg(true);
      };
    }
  };

  // console.log(file);

  return (
    <div className="max-w-7xl p-4 mx-auto w-full h-screen flex flex-col gap-3">
      {SelectedImg && (
        <img
          onClick={() => {
            setSelectedImg(false);
            setPostImg(null);
          }}
          src={PostImg}
          alt=""
          className="cursor-pointer w-full object-cover h-[30%] rounded-lg hover:scale-105 transform ease-out duration-150"
        />
      )}

      <form
        onSubmit={handleSubmit}
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
        </div>

        <div className="flex items-center w-full">
          <div className="flex flex-col space-y-2 w-full flex-grow">
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="border-2 border-gray-200 p-2 rounded-md"
            >
              {Categories?.length > 0 &&
                Categories?.map((category) => (
                  <option value={category?.name} key={category._id}>
                    {category?.name}
                  </option>
                ))}
            </select>
          </div>
          <button
            onClick={() => {
              setSelectedImg(false);
              setPostImg(null);
              setPostTitle("");
              setPostDescription("");
              setFile(null);
            }}
            className="py-2 px-8 rounded-lg text-white ml-10 font-bold bg-red-600 hover:bg-red-500 active:bg-red-400"
          >
            Discard
          </button>
          <button
            type="submit"
            className="py-2 px-8 rounded-lg text-white ml-10 font-bold bg-green-600 hover:bg-green-500 active:bg-green-400"
          >
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
