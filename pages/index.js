import Head from "next/head";
import Image from "next/image";
import { BiMessageSquareAdd } from "react-icons/bi";
import Table from "../components/tables";

export default function Home() {
  return (
    <section>
      <Head>
        <title>CRUD</title>
        <meta name="description" content="CRUD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Note-Board
        </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button className="flex bg-indigo-300 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover: text-gray-600 ">
              <span className="px-0 pr-3">
                <BiMessageSquareAdd size={25}></BiMessageSquareAdd>
              </span>
              Add Commets
            </button>
          </div>
          {/* collapsable form */}
        </div>
        <div className="container mx-auto">
          {/* table */}
          <Table></Table>
        </div>
      </main>
    </section>
  );
}
