import { MapPin, Images } from "lucide-react";

const TiffinDetailsContent = () => {
  return (
    <div className="flex flex-col justify-evenly">
      <h1 className="text-3xl font-bold">Service Provider Name</h1>
      <span className="text-[#8A3C09] flex gap-1 items-center font-semibold">
        <MapPin color="#8A3C09" size={20} />
        Provider Location
      </span>
      <span className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos,
        qui soluta illo eveniet a, provident nesciunt, dolorum aspernatur
        dolorem doloribus atque veniam maiores eius magni quis eligendi quam
        incidunt.
      </span>
      <div className="flex w-[80%] gap-2.5">
        <div className="tiffin-sub-img"></div>
        <div className="tiffin-sub-img"></div>
        <div className="tiffin-sub-img"></div>
        <div className="tiffin-sub-img"></div>
        <div className="viewall-btn bg-[#eae4df] flex flex-col items-center justify-center">
          <Images color="#8A3C09" size={22} />
          <span className="text-[#8A3C09] text-sm font-normal">VIEW ALL</span>
        </div>
      </div>
    </div>
  );
};

export default TiffinDetailsContent;
