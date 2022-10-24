// this api will use the dbInteraction class to add a new sale to the dataabse

import { NextApiRequest, NextApiResponse } from "next";
import dbInteraction from "../../utils/dbInteraction";

export default async function addSale(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // it will extract the name and the price from the query
  let { name, price } = req.query;

  const n = name as string;
  const p = parseInt(price as string);
  // it will create a new sale object
  const db = new dbInteraction();
  const response = await db.createSale(n, p);
  res.status(200).json(response);
}
