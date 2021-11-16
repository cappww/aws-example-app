// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Employee } from "../../../interfaces/Employee";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Employee>
) {
  res
    .status(200)
    .json({ first_name: "John", last_name: "Doe", _id: "1", photo_url: "/" });
}
