import { BiEraser, BiTrashAlt } from "react-icons/bi";
import { getUsers } from "../lib/helper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "../redux/reducer";

export default function Table() {
  const { isLoading, isError, data, error } = useQuery("users", getUsers);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Got Error{error}</div>;

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          {/* <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th> */}

          <th className="px-16 py-2">
            <span className="text-gray-200">Date</span>
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

function Tr({ _id, name, date, comments }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  console.log("visible", visible);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction(_id));
    if (visible) {
      dispatch(updateAction(_id));
    }
  };
  const onDelete = () => {
    if (!visible) {
      dispatch(deleteAction(_id));
    }
  };
  const k_date = new Date().toLocaleDateString("ko-kr");
  return (
    <tr className="text-center bg-gray-50">
      <td className="flex flex-row items-center px-16 py-3">
        <span className="ml-2 font-semibold text-center">
          {name || "누구세요?"}
        </span>
      </td>
      {/* <td className="px-16 py-3" alt="email">
        <span>{email || "Unknown"}</span>
      </td> */}
      <td className="px-16 py-3" alt="date">
        <span>{date || k_date}</span>
      </td>
      <td className="px-16 py-3" alt="comment">
        <span>{comments || `${name} 바보 ! `}</span>
      </td>
      <td className="flex justify-around gap-3 px-16 py-3" alt="수정">
        <button className="cursor ">
          <BiEraser
            className="cursor"
            onClick={onUpdate}
            size={27}
            color="green"
          ></BiEraser>
        </button>
        <button className="cursor ">
          <BiTrashAlt
            className="cursor"
            onClick={onDelete}
            size={25}
            color="red"
          ></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
}
