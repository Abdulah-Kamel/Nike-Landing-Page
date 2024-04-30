export default function App() {
    document.addEventListener("DOMContentLoaded", () => {
      const toggleDark = document.getElementById("toggleDark");
      toggleDark.addEventListener("click", function () {
        if (document.documentElement.classList.includes("dark")) {
          document.documentElement.classList.remove("dark");
        } else {
          document.documentElement.classList.add("dark");
        }
        alert("click!");
      });
    });
    return (
      <main className="p-5">
        <h1 className="text-center font-mono font-extrabold text-lg">
          Hello world!
        </h1>
        <div className="w-full h-10 bg-violet-200 border-2 border-violet-600 rounded-md my-4 p-2">
          <p className="text-center font-mono font-extrabold text-lg">a div</p>
        </div>
        <div className="flex justify-between">
          <div className="w-16 h-16 rounded-full bg-blue-500 "></div>
          <div className="w-16 h-16 rounded-full bg-blue-500 "></div>
          <div className="w-16 h-16 rounded-full bg-blue-500 "></div>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-5">
          <div className="h-12 bg-violet-600"></div>
          <div className="h-12 bg-violet-600"></div>
          <div className="h-12 bg-violet-600"></div>
          <div className="h-12 bg-violet-600"></div>
        </div>
        <div className="md:block hidden">
          <p>i will show only on screens bigger than 768px </p>
        </div>
        <div className="max-md:block hidden">
          <p>i will show only on screens smaller than 768px </p>
        </div>
        <button className="specialbtn">
          click Me
        </button>
        <ul className="my-2 space-y-2">
          <li className="bg-white p-2 first:bg-yellow-100">item 1</li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
            item 2
          </li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
            item 3
          </li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
            item 4
          </li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
            item 5
          </li>
        </ul>
  
        <div className="card">
          <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
            This Is Text of h3
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-blue-200">This Is Text of p</p>
          <button
            id="toggleDark"
            className="tex to-blue-900 px-4 py-2 text-sm font-medium mt-8 bg-blue-100"
            onClick={function name() {
              document.body.classList.toggle("dark");
            }}
          >
            toggle
          </button>
        </div>
        <p className="text-specialblue">Lorem ipsum dolor sit amet.</p>
      </main>
    );
  }
  