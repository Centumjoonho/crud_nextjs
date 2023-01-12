import { BiCheck } from "react-icons/bi";

export default function Bug({ message }) {
  return (
    <div className="container mx-auto success">
      <div className="flex justify-center w-3/6 py-2 mx-auto my-4 text-center text-gray-900 bg-red-400 border border-red-200 text-md bg-opacity-5">
        {message} <BiCheck size={25} color={"rgb(248 113 113)"}></BiCheck>
      </div>
    </div>
  );
}
