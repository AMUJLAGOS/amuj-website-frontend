//

// import React from "react";

// const Spinner = () => {
//   return (
//     <div className="flex items-center justify-center">
//       <div className="animate-spin rounded-full border-t-2 border-b-2 border-[#908B8B] border-opacity-50 h-8 w-8"></div>
//     </div>
//   );
// };

// export default Spinner;

const Spinner = ({ height, color }: any) => {
  console.log(`border-r-${color}`);
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-4 ${
          color
            ? `border-r-${color} border-t-${color}`
            : "border-r-white border-t-white"
        } border-transparent ${height ? `h-${height} w-${height}` : "h-6 w-6"}`}
      ></div>
    </div>
  );
};

export default Spinner;
