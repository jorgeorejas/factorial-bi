// this api will use the dbInteraction class to add a new sale to the dataabse

import { NextApiRequest, NextApiResponse } from "next";
import dbInteraction from "../../utils/dbInteraction";

export default async function addSale(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = new dbInteraction();
  const response = await db.removeAll();
  res.status(200).json(response);
}
