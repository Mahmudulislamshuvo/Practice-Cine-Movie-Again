import { TiStarFullOutline } from "react-icons/ti";

const Star = ({ value }) => {
  const totalStars = 5;

  return (
    <>
      {[...Array(totalStars)].map((_, i) => (
        <TiStarFullOutline
          className={`${
            i < value ? "text-[#00D991]" : "text-[#D1D5DB]"
          } h-5 w-5`}
        />
      ))}
    </>
  );
};

export default Star;

// import starsImage from "../assets/star.svg";

// const Star = ({ value }) => {
//   const stars = Array(value).fill(starsImage);
//   return (
//     <>
//       {stars.map((item, i) => (
//         <img src={item} key={i} alt="star" width="14" height="14" />
//       ))}
//     </>
//   );
// };

// export default Star;
