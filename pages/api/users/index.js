import next from "next";
import connectMongo from "../../../database/conn";
import {
  GetUsers,
  PostUsers,
  PutUsers,
  DeleteUsers,
} from "../../../database/controller";

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
      // res.status(200).json({ method, name: "POST Request" });
      break;
    case "PUT":
      PutUsers(req, res);
      // res.status(200).json({ method, name: "PUT Request" });
      break;
    case "DELETE":
      DeleteUsers(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
