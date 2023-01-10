import { BiEraser, BiTrashAlt } from "react-icons/bi";
import { getUsers } from "../lib/helper";
import { useQuery } from "react-query";

export default function Table() {
  const { isLoading, isError, data, error } = useQuery("users", getUsers);
  if (isLoading) return <div>Note-Board is Loading...</div>;
  if (isError) return <div>Got Error{error}</div>;

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
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
        {data.map((obj, i) => (
          <Tr {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
}

function Tr({ id, name, avatar, email, date, status, comments }) {
  const k_date = new Date().toLocaleDateString("ko-kr");
  return (
    <tr className="text-center bg-gray-50">
      <td className="flex flex-row items-center px-16 py-3">
        <img
          src={avatar || "#"}
          alt=""
          className="object-cover w-10 h-10 rounded-full"
        />
        <span className="ml-2 font-semibold text-center">
          {name || "Unknown"}
        </span>
      </td>
      <td className="px-16 py-3" alt="email">
        <span>{email || "Unknown"}</span>
      </td>
      <td className="px-16 py-3" alt="birthday">
        <span>{date || k_date}</span>
      </td>
      <td className="px-16 py-3" alt="status">
        <button className="cursor">
          <span
            className={`px-5 py-1 text-white ${
              status == "active" ? "bg-green-500" : "bg-rose-500"
            } rounded-lg`}
          >
            {status || "Unknown"}
          </span>
        </button>
      </td>
      <td className="px-16 py-3" alt="comment">
        <span>{comments || "hello joonho ! "}</span>
      </td>
      <td className="flex justify-around gap-3 px-16 py-3" alt="수정">
        <button className="cursor ">
          <BiEraser size={27} color="green"></BiEraser>
        </button>
        <button className="cursor ">
          <BiTrashAlt size={25} color="red"></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
}
