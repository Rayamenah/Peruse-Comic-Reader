// import React, { useContext } from "react";
// import { Context } from "../../App.jsx";
// //Icons
// import { AiFillHeart } from "react-icons/ai";
// import { GiCancel } from "react-icons/gi";

// const Favorite = () => {
//   const { show, setShow, favorites } = useContext(Context);

//   return (
//     <div className="mt-1 mr-4 cursor-pointer" onClick={() => setShow(!show)}>
//       {show == false && (
//         <AiFillHeart
//           style={{
//             height: "25px",
//             width: "25px",
//             color: "rgb(15, 23, 42)",
//           }}
//         />
//       )}

//       {show && (
//         <div className="absolute z-10 top-0 right-0 h-full w-full bg-slate-500 md:w-1/2">
//           <button
//             className="absolute top-3 right-5 cursor-pointer"
//             onClick={() => setShow(false)}
//           >
//             <GiCancel
//               style={{
//                 height: "25px",
//                 width: "25px",
//                 color: "rgb(15, 23, 42)",
//               }}
//             />
//           </button>
//           <h1 className="text-xl mt-2 ml-4 text-slate-900 ">Favourites</h1>
//           {favorites.map((item) => (
//             <div>{item.name}</div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Favorite;
