"use client";
import React, { useState } from "react";

export default function Page() {
  const [file, setFile] = useState();

  const onsubmit = async (e) => {
    e.preventDefault();
    console.log(file);

    const data = new FormData();
    data.set("file", file);

    const result = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });

    const response = await result.json();
    alert(response.message || "Upload done");
  };

  return (
    <>
      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl text-center font-bold text-green-600 mb-6 font-mono">
            Upload Image
          </h1>

          <form onSubmit={onsubmit} className="space-y-5">
            <label className="block">
              <span className="text-gray-700 font-semibold">Select an image</span>
              <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files?.[0])}
                className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Upload
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
