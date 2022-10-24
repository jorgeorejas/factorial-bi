// this api will use the dbInteraction class to add a new sale to the dataabse

import * as Falso from "@ngneat/falso";
import { randRecentDate } from "@ngneat/falso";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../utils/client";

export default async function addSale(
  req: NextApiRequest,
  res: NextApiResponse
) {
  for (let i = 0; i < 100; i++) {
    const price = Math.floor(Math.random() * (300 - 50 + 1) + 50);
    const date = randRecentDate({ days: 7 });
    await prisma.sales.create({
      data: {
        client: Falso.randCompanyName(),
        value: price,
        date: date,
      },
    });
  }

  res.status(200).json({ created: 100 });
}
