import methods from "@/public/images/methods.png";
import Image from "next/image";
const Copyright = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
        <div>
          <Image src={methods} alt="methods" className="h-5 w-60" />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
