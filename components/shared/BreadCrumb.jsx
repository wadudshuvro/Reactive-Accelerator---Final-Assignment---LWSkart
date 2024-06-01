import Link from "next/link";
import { FaChevronRight, FaHouseChimney } from "react-icons/fa6";
const BreadCrumb = ({ name }) => {
  return (
    <div className="container py-4 flex items-center gap-3">
      <Link href="/" className="text-primary text-base">
        <FaHouseChimney />
      </Link>
      <span className="text-sm text-gray-400">
        <FaChevronRight />
      </span>
      <p className="text-gray-600 font-medium">Account</p>
    </div>
  );
};

export default BreadCrumb;
