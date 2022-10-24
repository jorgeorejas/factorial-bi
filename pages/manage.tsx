import { Card } from "@tremor/react";
import * as UI from "../components";
import DataBaseInteraction from "../utils/dbInteraction";
import { InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";

function Manage({
  sales,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <UI.Layout selected="manager">
      <Card marginTop="mt-4" hFull={true}>
        <UI.Table data={sales} />
      </Card>
    </UI.Layout>
  );
}

export default dynamic(() => Promise.resolve(Manage), {
  ssr: false,
});
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
