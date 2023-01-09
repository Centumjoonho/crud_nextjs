import { BiEraser, BiTrashAlt } from "react-icons/bi";
export default function Table() {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-700">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>

          <th className="px-16 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Comment</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Action</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-300">
        <tr>
          <td className="px-16 py-3 flex flex-row items-center">
            <img src="#" alt="" />
            <span className="text-center ml-2 font-semibold">ghwnsgkgk</span>
          </td>
          <td className="px-16 py-3" alt="email">
            <span>ghwnsgkgk@kakao.com</span>
          </td>
          <td className="px-16 py-3" alt="birthday">
            <span>1992-01-16</span>
          </td>
          <td className="px-16 py-3" alt="status">
            <button className="cursor">
              <span className="bg-green-500 text-white px-5 py-1 rounded-lg">
                Active
              </span>
            </button>
          </td>
          <td className="px-16 py-3" alt="comment">
            <span>hellow world ! </span>
          </td>
          <td className="px-16 py-3 flex justify-around gap-3" alt="수정">
            <button className="cursor ">
              <BiEraser size={27} color="green"></BiEraser>
            </button>
            <button className="cursor ">
              <BiTrashAlt size={25} color="red"></BiTrashAlt>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
