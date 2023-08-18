import cors from 'micro-cors'; // micro-cors를 임포트합니다.
import connectMongo from "../../../database/conn";
import { GetUsers, PostUsers } from "../../../database/controller";

const corsHandler = cors({
  origin: process.env.VERCEL_URL, // Vercel 도메인 또는 로컬 개발 환경의 주소
  methods: ['GET', 'POST'], // 필요한 HTTP 메서드를 설정합니다.
});

export default corsHandler(async function Handler(req, res) {
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
});