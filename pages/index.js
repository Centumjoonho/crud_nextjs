import Head from "next/head";
import { BiMessageSquareAdd, BiCheck, BiX } from "react-icons/bi";
import Table from "../components/tables";
import Form from "../components/form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction, deleteAction } from "../redux/reducer";
import { deleteUser, getUsers } from "../lib/helper";
import { useQueryClient } from "react-query";

export default function Home() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(toggleChangeAction());
  };
  const cancelHandler = async () => {
    alert("우리의 기억은 영원하다");
    await dispatch(deleteAction(null));
  };
  const deleteHandler = async () => {
    if (deleteId) {
      await deleteUser(deleteId);
      await queryClient.prefetchQuery("users", getUsers);
      await dispatch(deleteAction(null));
    }
  };

  return (
    <section>
      <Head>
        <title>방명록</title>
        <meta name="description" content="CRUD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-5">
        <h1 className="py-10 text-xl font-bold text-center md:text-5xl">
          방명록
        </h1>
        <div className="container flex justify-between py-5 mx-auto border-b">
          <div className="flex gap-3 left">
            <button
              onClick={handler}
              className="flex px-4 py-2 text-white bg-indigo-300 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-600 "
            >
              <span className="px-0 pr-3">
                <BiMessageSquareAdd size={25}></BiMessageSquareAdd>
              </span>
              Add Comments
            </button>
          </div>
          {deleteId ? DeleteComponent({ deleteHandler, cancelHandler }) : <></>}
        </div>
        ; {/* collapsable form */}
        {visible ? <Form></Form> : <></>}
        {/* table */}
        <div className="container mx-auto">
          <Table></Table>
        </div>
      </main>
    </section>
  );
}

function DeleteComponent({ deleteHandler, cancelHandler }) {
  return (
    <div className="flex gap-5">
      <p>Are you sure?</p>

      <button
        onClick={deleteHandler}
        className="flex px-4 py-2 text-white border rounded-md bg-rose-500 border-rose-500 hover:bg-inherit hover: hover:text-rose-500 "
      >
        <span className="px-1 ">
          <BiX color="rgb(255 255 255)" size={25} />
        </span>
      </button>
      <button
        onClick={cancelHandler}
        className="flex px-4 py-2 text-white bg-green-500 border border-green-500 rounded-md hover:bg-inherit hover:text-green-500 "
      >
        <span className="px-1 ">
          <BiCheck color="rgb(255 255 255)" size={25} />
        </span>
      </button>
    </div>
  );
}
