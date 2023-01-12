import { BiPlus, BiBrush } from "react-icons/bi";
import { useReducer } from "react";
import Success from "./success";
import Bug from "./bug";
import { getUsers, getUser, updateUser, deleteAction } from "./../lib/helper";
import { useQuery, useMutation, useQueryClient } from "react-query";

export default function UpdateUserForm({ formId, formData, setFormData }) {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(["users", formId], () =>
    getUser(formId)
  );
  const UpdateMutation = useMutation((newData) => updateUser(formId, newData), {
    onSuccess: async (data) => {
      // queryClient.setQueryData("users",(old)=>[data])
      queryClient.prefetchQuery("users", getUsers);
    },
  });

  if (isLoading) return <div>Loading...!</div>;
  if (isError) return <div>Error</div>;

  const { name, date, email, comments } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updated = Object.assign({}, data, formData);
    console.log("updated", updated);
    await UpdateMutation.mutate(updated);
  };
  if (Object.keys(formData).length < 0) return <Bug message={"Error"}></Bug>;

  return (
    <form
      className="grid w-4/6 gap-4 mt-2 lg:grid-cols-1"
      onSubmit={handleSubmit}
    >
      {/* 이름 */}
      <div className="input-type">
        <input
          type="text"
          name="name"
          onChange={setFormData}
          defaultValue={name}
          placeholder="이름"
          className="w-full px-5 py-3 border rounded-md focus:outline-none"
        />
      </div>
      {/* 이메일 */}
      <div className="input-type">
        <input
          type="text"
          name="email"
          onChange={setFormData}
          defaultValue={email}
          placeholder="Email"
          className="w-full px-5 py-3 border rounded-md focus:outline-none"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          name="date"
          onChange={setFormData}
          defaultValue={date}
          className="px-5 py-3 border rounded-md w-fit focus:outline-none"
        />
      </div>
      <div className="textarea-type">
        <textarea
          rows="4"
          onChange={setFormData}
          defaultValue={comments}
          name="comments"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      {/* <div className="flex items-center gap-10">
        <div className="form-check">
          <input
            type="radio"
            id="radioDefault1"
            name="status"
            onChange={setFormData}
            defaultValue={status == "false"}
            className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-green-500 checked:border-green-500 focus:outline-none"
          />
          <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
            active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="radioDefault2"
            name="status"
            onChange={setFormData}
            defaultValue={status !== "true"}
            className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-green-500 checked:border-green-500 focus:outline-none"
          />
          <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
            Inactive
          </label>
        </div>
      </div> */}
      <button className="flex justify-center px-4 py-2 m-1 text-white bg-yellow-500 border rounded-md w-fit text-md hover:bg-gray-50 hover:border-yellow-500 hover:text-yellow-500">
        <span className="px-1">
          <BiBrush size={24}></BiBrush>
        </span>
        Update{" "}
      </button>
    </form>
  );
}
