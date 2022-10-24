import * as Falso from "@ngneat/falso";
import { randBetweenDate, randRecentDate } from "@ngneat/falso";

import prisma from "../utils/client";
async function main() {
  // save the start time
  const start = new Date();
  for (let i = 0; i < 1121; i++) {
    // random number integer between 50 and 300
    const price = Math.floor(Math.random() * (300 - 50 + 1) + 50);
    const date = randRecentDate({ days: 7 });
    console.log(i);
    // create sale
    await prisma.sales.create({
      data: {
        client: Falso.randCompanyName(),
        value: price,
        date: date,
      },
    });
  }

  // calculate the time it took to seed the database in seconds
  const end = new Date();
  const time = (end.getTime() - start.getTime()) / 1000;
  console.log(`Seeding took ${time} seconds`);
}

main()
  .then(async () => {
    console.log("Seeding completed");
  })
  .catch(async (e) => {
    console.log("Seeding failed");
    console.error(e);
    process.exit(1);
  });
