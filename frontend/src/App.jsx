import React from "react";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <p className="mt-4 text-gray-700">
        This is a simple React application styled with Tailwind CSS.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click Me
      </button>
    </div>
  );
};

export default App;
