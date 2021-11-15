// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Employee } from "../../interfaces/Employee";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Employee[]>
) {
  res.status(200).json([
    { first_name: "John", last_name: "Doe", _id: "1", photo_url: "/" },
    { first_name: "Johnny", last_name: "Two-Time", _id: "2", photo_url: "/" },
    { first_name: "Jon", last_name: "Stewart", _id: "3", photo_url: "/" },
    { first_name: "Johnathan", last_name: "Cash", _id: "4", photo_url: "/" },
    { first_name: "Jimmy", last_name: "Johns", _id: "5", photo_url: "/" },
    { first_name: "Jake", last_name: "Wilder", _id: "6", photo_url: "/" },
    { first_name: "Josh", last_name: "Goldberg", _id: "7", photo_url: "/" },
    { first_name: "Drake", last_name: "Nathan", _id: "8", photo_url: "/" },
    { first_name: "Randy", last_name: "Roo", _id: "9", photo_url: "/" },
    { first_name: "Pete", last_name: "Davidson", _id: "10", photo_url: "/" },
  ]);
}
