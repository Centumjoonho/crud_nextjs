import next from "next";
import connectMongo from "../../../database/conn";
import { GetUsers, PostUsers } from "../../../database/controller";

export default async function Handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      GetUsers(req, res);
      break;
    case "POST":
      PostUsers(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
