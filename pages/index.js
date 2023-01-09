import Head from "next/head";
import Image from "next/image";
import { BiMessageSquareAdd } from "react-icons/bi";
import Table from "../components/tables";
import Form from "../components/form";
import handler from "./api/hello";
import { useState } from "react";
export default function Home() {
  const [visible, setVisible] = useState(false);
  const handler = () => {
    setVisible(visible ? false : true);
  };

  return (
    <section>
      <Head>
        <title>CRUD</title>
        <meta name="description" content="CRUD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-5">
        <h1 className="py-10 text-xl font-bold text-center md:text-5xl">
          Note-Board
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
              Add Employee
            </button>
          </div>
        </div>
        {/* collapsable form */}
        <div className="container py-5 mx-auto">
          {visible ? <Form></Form> : <></>}
        </div>

        {/* table */}
        <div className="container mx-auto">
          <Table></Table>
        </div>
      </main>
    </section>
  );
}
