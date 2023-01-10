import connectMongo from "../../../database/conn";
import { GetUser, PutUsers, DeleteUsers } from "../../../database/controller";

export default async function Handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      GetUser(req, res);
      break;
    case "PUT":
      PutUsers(req, res);
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
