import React, { useEffect, useState } from "react";
import { BiLogoYoutube, BiSearchAlt2 } from "react-icons/bi";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText("");
  };
  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BiLogoYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form
        className="w-full flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="w-7/12 px-2 outline-none bg-black text-gray-50 "
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 p-1">
          <BiSearchAlt2 />
        </button>
      </form>
    </header>
  );
}
