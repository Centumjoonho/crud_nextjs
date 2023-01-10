import next from "next";
import connectMongo from "../../../database/conn";
import {
  GetUsers,
  PostUsers,
  PutUsers,
  DeleteUsers,
} from "../../../database/controller";

export default async function Handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
    case "POST":
    case "PUT":
    case "DELETE":
  }
}
