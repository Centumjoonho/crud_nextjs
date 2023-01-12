import { BiPlus } from "react-icons/bi";
import { useReducer } from "react";
import Success from "./success";
import Error from "./error";
import { useQueryClient, useMutation } from "react-query";
import { addUser } from "../lib/helper";
import Bug from "./bug";
import { getUsers } from "./../lib/helper";

export default function AddUserForm({ formData, setFormData }) {
  const queryClient = useQueryClient();

  const addMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.prefetchQuery("users", getUsers);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("Don't have FormData");
    console.log("formData : ", formData);
    let { name, email, date, comments } = formData;
    const model = {
      name: name,
      email,
      date,
      comments: comments,
    };
    addMutation.mutate(model);
  };
  if (addMutation.isLoading) return <div>Loading!</div>;
  if (addMutation.isError)
    return <Bug message={addMutation.error.message}></Bug>;
  if (addMutation.isSuccess)
    return <Success message={"Added Successfully"}></Success>;

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
          placeholder="Name"
          className="w-full px-5 py-3 border rounded-md focus:outline-none"
        />
      </div>
      {/* 이메일 */}
      <div className="input-type">
        <input
          type="text"
          name="email"
          onChange={setFormData}
          placeholder="Email"
          className="w-full px-5 py-3 border rounded-md focus:outline-none"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          name="date"
          onChange={setFormData}
          className="px-5 py-3 border rounded-md w-fit focus:outline-none"
        />
      </div>
      <div className="textarea-type">
        <textarea
          rows="4"
          name="comments"
          onChange={setFormData}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      {/* <div className="flex items-center gap-10">
        <div className="form-check">
          <input
            type="radio"
            value="active"
            id="radioDefault1"
            name="status"
            onChange={setFormData}
            className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-green-500 checked:border-green-500 focus:outline-none"
          />
          <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
            active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            value="Inactive"
            id="radioDefault2"
            name="status"
            onChange={setFormData}
            className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-green-500 checked:border-green-500 focus:outline-none"
          />
          <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
            Inactive
          </label>
        </div>
      </div> */}
      <button className="flex justify-center px-4 py-2 m-1 text-white bg-green-500 border rounded-md w-fit text-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        <span className="px-1">
          <BiPlus size={24}></BiPlus>
        </span>
        Add{" "}
      </button>
    </form>
  );
}
