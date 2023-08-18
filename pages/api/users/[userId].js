import cors from 'micro-cors'; // micro-cors를 임포트합니다.
import connectMongo from "../../../database/conn";
import { GetUser, PutUsers, DeleteUsers } from "../../../database/controller";

const corsHandler = cors({
  origin: process.env.VERCEL_URL || 'http://localhost:3000', // Vercel 도메인 또는 로컬 개발 환경의 주소
  methods: ['GET', 'PUT', 'DELETE'], // 필요한 HTTP 메서드를 설정합니다.
});

export default corsHandler(async function Handler(req, res) {
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
});
