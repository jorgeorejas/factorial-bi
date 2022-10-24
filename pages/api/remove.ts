// this api will use the dbInteraction class to add a new sale to the dataabse

import { NextApiRequest, NextApiResponse } from "next";
import dbInteraction from "../../utils/dbInteraction";

export default async function addSale(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // it will extract the name and the price from the query
  let { id } = req.query;
  let n = id as string;
  const db = new dbInteraction();
  const response = await db.removeSale(n);
  res.status(200).json(response);
}
