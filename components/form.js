import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";
import { useQuery } from "react-query";

const formReducer = (oldFormData, event) => {
  return {
    ...oldFormData,
    [event.target.name]: event.target.value,
  };
};

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state) => state.app.client.formId);
  return (
    <div className="container py-5 mx-auto">
      {formId
        ? UpdateUserForm({ formId, formData, setFormData })
        : AddUserForm({ formData, setFormData })}
    </div>
  );
}
