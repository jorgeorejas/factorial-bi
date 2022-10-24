import { Card } from "@tremor/react";
import Link from "next/link";
import * as UI from "../components";
import DataProcessor from "../utils/dataProcessor";
import DataBaseInteraction from "../utils/dbInteraction";
import { InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";

function Home({
  sales,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const processor = new DataProcessor(sales);
  const data: DashboardData = {
    total: processor.totalSales(),
    accumulated: processor.sumPrices(),
    byDay: {
      average: processor.averagePricesByDay(),
      graphData: processor.sumPricesByDay(),
    },
    byHour: {
      average: processor.averagePricesByHour(),
      graphData: processor.sumPricesByHour(),
    },
    byMinute: {
      average: processor.averagePricesByMinute(),
      graphData: processor.sumPricesByMinute(),
    },
  };
  return (
    <UI.Layout selected="dashboard">
      <Card marginTop="mt-4" hFull={true}>
        <UI.Dashboard data={data} />
      </Card>
    </UI.Layout>
  );
}
export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
// we will get server side props from the api
export async function getServerSideProps() {
  const db = new DataBaseInteraction();
  // return the data as props
  let sales = await db.getSales();
  sales = JSON.parse(JSON.stringify(sales));

  return {
    props: {
      sales,
    },
  };
}
