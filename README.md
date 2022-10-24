# Factorial Growth Engineer Challenge

The goal of the challenge is to evaluate your hard skills by providing a working code that can be presented to the rest of the team.

## 🖥 Your Job

Your job is to create a simple app with a backend and a client, with a special emphasis on quality. Feel free to use whatever tools you feel more comfortable with for the frontend and the backend, but those must be separated (single-page application). You’ll get extra points if the tool can be easily run on our machines.

---

## 💪 The Challenge

**Your challenge is to build a Frontend + Backend application that allows you to post and visualize metrics in a usable way.** Each metric will have a timestamp, name, and value. The metrics will be shown in a timeline and must show averages per minute/hour/day and persisted in the database.

The maximum time for the challenge is 8 hours in the time frame we establish. Feel free to use any tools you need, but remember to keep your code accessible on the public GitHub repository and use one of our technologies (React, Next.js...). If possible include both the backend and frontend code in the same repo.

---

## ✅ To evaluate

Once you deliver the challenge, we’ll schedule a second meeting with the rest of the team to evaluate your coding process, your ability to write clean code, and beautiful CSS (you can use preprocessors like Sass, Stylus, CSS-in-JS,..., or vanilla CSS), your ability to analyze and test your solution, and your capacity to prioritize the project and your decisions.

---



# My Implementation

## The Stack

- [ ] TypeScript
- [ ] NextJS
- [ ] TailwindCSS
- [ ] Tremor (React Library to build Dashboards Fast)
- [ ] Supabase (PostgreSQL DBaaS)
- [ ] FalsoJS (To generate false data to seed the database)
- [ ] Prisma (Node.js and TypeScript ORM)
- [ ] Jest (Testing Library

## The Implementation

The implementation consist on a dashboard that allows to visualize the sales of the company, and it shows the value of the sales across time, and also the number of clients across time.

It also shows the accumulated sales, the total clients and the total sales.

You can filter the data and show it by day, by hour and by minute, so you have a deeper insight of when the sales happen. Also showing the average revenue in those different time intervals.

The Implementation also has a manage table, where you can add or remove new data, and it's paginated so it's easier to visualize the information.

The result page is mobile ready, and all the libraries are prepared to be responive, although due to the requirements of the data it should manage, it might be hard to update the database using a phone.

The implementation uses classes to manage the database and to process the information, I decided to do so due to the cleaness of the code and the reusability. 

It also has a `/utils/types.d.ts` where you can find the types I used for the data of the application.

## Testing

For testing purpose as the generation of the data is random, I focused on testing the funcions I used for processing the data.

Those tests are:

- [x] The sum of all the prices of the sale is correct
- [x] The total sales count is correct
- [x] The Average of all the prices in the data array is correct
- [x] The sum of all the prices for each day of sales is correct

## Usefull information

- You should run yarn when you download the code to install the dependencies
- You should create a .env file with the database information, it should be a PostgreSQL address, you can ask me for the db I used and I would send the .env
- You would probably like to seed the database in order to visualize the information, thats why you should run `npx prisma db seed`
- You would also find the application running at https://factorial-bi.jorgeorejas.com
- For any other doubt I would be able to answer to it at the next interview.

