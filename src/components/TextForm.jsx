import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    //console.log("HandleOnChange Directed");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    //console.log("Uppercase is clicked");
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    //console.log("Lowercase is clicked");
    setText(text.toLowerCase());
  };

  const wordCount = () => {
    return text.trim().split(" ").length == 1
      ? text.trim().split(" ")[0] == ""
        ? 0
        : text.trim().split(" ").length
      : text.trim().split(" ").length;
  };

  const minutesRead = () => {
    return (
      0.008 *
      (text.length === 0
        ? 0
        : text.trim().split(" ").length == 1
        ? text.trim().split(" ")[0] == ""
          ? 0
          : text.trim().split(" ").length
        : text.trim().split(" ").length)
    );
  };
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <div className={`w-full sm:max-w-5xl max-w-xl p-4 my-3 shadow-md rounded-lg ${props.mode ? "bg-black":"bg-slate-100"}`}>
        <h1
          className={`p-2 ${
            props.mode ? "text-blue-500 border border-slate-50" : "text-black"
          } font-bold text-2xl mb-4`}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          {/* <label htmlFor="myBox" className="block text-sm font-medium text-gray-700">
          Example textarea
        </label> */}
          <textarea
            className={`w-full sm:max-w-5xl max-w-xl mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.mode ? "bg-slate-700 text-white": ""}`}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className={`${
            props.mode
              ? "dark:bg-slate-800 dark:hover:bg-slate-600 dark:text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          } py-2 px-4 rounded mx-1`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`${
            props.mode
              ? "dark:bg-slate-800 dark:hover:bg-slate-600 dark:text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          } py-2 px-4 rounded mx-1`}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
      </div>
      <div className={`w-full sm:max-w-5xl max-w-xl p-4 shadow-md rounded-lg ${props.mode ? "bg-black":"bg-slate-100"}`}>
        <h1 className={`${
            props.mode ? "text-blue-500 border" : "text-black"
          } font-bold text-lg mb-4`}>Your text summary</h1>
        <p className={`${props.mode ? "text-purple-800":""}`}>
          {wordCount()} words and {text?.length} characters.
        </p>
        <p className={`${[props.mode ? "text-purple-800": ""]}`}>{minutesRead()} minutes read</p>
        <h2 className={`${
            props.mode ? "text-blue-500 border" : "text-black"
          } font-bold text-xl mt-2`}>Preview</h2>
        <p className={`${[props.mode ? "text-purple-800": ""]}`}>{text.length> 0 ? text: "Enter text to preview"}</p>
      </div>
    </div>
  );
}
