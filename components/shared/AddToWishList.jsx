import addToWishList from "@/actions/addWishList";
import { FaRegHeart } from "react-icons/fa";

const AddToWishList = ({ session, pd }) => {
  const wishSubmit = async () => {
    "use server";
    addToWishList({ ...session?.user, pd });
  };
  return (
    <form action={wishSubmit}>
      <button
        disabled={!session?.user}
        type="submit"
        className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
        title="add to wishlist"
      >
        <FaRegHeart />
      </button>
    </form>
  );
};

export default AddToWishList;
