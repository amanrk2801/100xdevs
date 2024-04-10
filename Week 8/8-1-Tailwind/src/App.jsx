// import "./App.css";

import { RevenueCard } from "./components/RevenueCard"

// function App() {
//   return (
//     <>
//       {/* Flex */}
//       {/* Normal Styling */}
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div style={{ backgroundColor: "red" }}>how are you?</div>
//         <div style={{ backgroundColor: "blue" }}>how are you?</div>
//         <div style={{ backgroundColor: "green" }}>how are you?</div>
//       </div>
//       {/* Using Tailwind */}
//       <div className="flex justify-center">
//         <div className="bg-red-500">how are you?</div>
//         <div className="bg-blue-500">how are you?</div>
//         <div className="bg-green-500">how are you?</div>
//       </div>

//       {/* Grid */}
//       <div style={{ display: "grid", gap: "20px" }}>
//         <div style={{ backgroundColor: "red" }}>how are you?</div>
//         <div style={{ backgroundColor: "blue" }}>how are you?</div>
//         <div style={{ backgroundColor: "green" }}>how are you?</div>
//       </div>
//       {/* Using Tailwind */}
//       {/* Using grid */}
//       <div className="grid grid-cols-10 pt-3">
//         <div className="bg-red-500 col-span-5">how are you?</div>
//         <div className="bg-blue-500 col-span-3">how are you?</div>
//         <div className="bg-green-500 col-span-2">how are you?</div>
//       </div>
//       {/* Using flex */}
//       <div className="flex">
//         <div className="bg-red-500 w-[50%]">how are you?</div>
//         <div className="bg-blue-500 w-[30%]">how are you?</div>
//         <div className="bg-green-500 w-[20%]">how are you?</div>
//       </div>

//       {/* Responsiveness in Tailwind: https://tailwindcss.com/docs/responsive-design */}

//       <div className="grid grid-cols-10 pt-3">
//         <div className="sm:bg-red-500 bg-orange-500 col-span-5">
//           how are you?
//         </div>
//         <div className="md:bg-blue-500 bg-orange-500 col-span-3">
//           how are you?
//         </div>
//         <div className="lg:bg-green-500 bg-orange-500 col-span-2">
//           how are you?
//         </div>
//       </div>

//       <div className="bg-red-500 md:bg-blue-500">how are you</div>

//       <div className="grid grid-cols-10 pt-3">
//         <div className="bg-red-500 col-span-10 sm:col-span-5">how are you?</div>
//         <div className="bg-blue-500 col-span-10 md:col-span-3">
//           how are you?
//         </div>
//         <div className="bg-green-500 col-span-10 lg:col-span-2">
//           how are you?
//         </div>
//       </div>

//       {/* Right way */}
//       <div className="grid grid-cols-1 md:grid-cols-3 pt-3">
//         <div className="bg-red-500 text-yellow-500 text-xl rounded-xl">how are you?</div>
//         <div className="bg-blue-500 text-yellow-500 rounded-xl">how are you?</div>
//         <div className="bg-green-500 text-yellow-500 rounded-xl">how are you?</div>
//       </div>
//     </>
//   );
// }

// export default App;

function App(){
  return (
    <div className="grid grid-cols-3">
      <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13}/>
    </div>
  )
}

export default App

// StoryBook
// MUI
// Responsive sidebar

