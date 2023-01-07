import { BiCheck } from "react-icons/bi";

export default function Success({ message }) {
  return (
    <div className="container mx-auto success">
      <div className="flex justify-center w-3/6 py-2 mx-auto my-4 text-center text-gray-900 bg-green-400 border border-green-200 text-md bg-opacity-5">
        <BiCheck size={25} color={"rgb(34,197,94)"}></BiCheck> {message}
      </div>
    </div>
  );
}
