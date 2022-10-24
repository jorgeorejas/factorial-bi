import {
  AreaChart,
  Block,
  Card,
  ColGrid,
  Divider,
  Flex,
  Icon,
  Metric,
  SelectBox,
  SelectBoxItem,
  Text,
  Title,
} from "@tremor/react";

import * as Outline from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Dashboard({ data }: { data: DashboardData }) {
  const [graphData, setGraphData] = useState(data.byDay.graphData);
  const [average, setAverage] = useState(data.byDay.average);
  // on the page load, it should check the URL for the graph query and set the state accordingly
  // if the url has no query, it should set it to the default (byDay)
  useEffect(() => {
    const url = new URL(window.location.href);
    const query = url.searchParams.get("graph");
    if (query == "byDay") {
      setGraphData(data["byDay"].graphData);
      setAverage(data["byDay"].average);
    } else if (query == "byHour") {
      setGraphData(data["byHour"].graphData);
      setAverage(data["byHour"].average);
    } else if (query == "byMinute") {
      setGraphData(data["byMinute"].graphData);
      setAverage(data["byMinute"].average);
    } else {
      setGraphData(data["byDay"].graphData);
      setAverage(data["byDay"].average);
    }
  }, [data]);

  function handleChange(value: "byDay" | "byHour" | "byMinute") {
    setGraphData(data[value].graphData);
    setAverage(data[value].average);
    // adds the value to the URL in a query param
    history.pushState(null, "", `?graph=${value}`);
  }

  function formatPrice(price: number) {
    return price.toLocaleString("es-ES", {
      style: "currency",
      currency: "EUR",
    });
  }

  function byWhat() {
    if (graphData == data["byDay"].graphData) {
      return "by day";
    } else if (graphData == data["byHour"].graphData) {
      return "by hour";
    } else if (graphData == data["byMinute"].graphData) {
      return "by minute";
    }
  }
  return (
    <>
      <ColGrid
        numColsSm={1}
        numColsMd={1}
        numColsLg={3}
        gapX="gap-x-6"
        gapY="gap-y-6"
        marginTop="mt-6"
      >
        <div>
          <Title>Dashboard</Title>
          <Text marginTop="mt-4">
            Ipsum in sit deserunt nostrud quis. Qui anim sunt deserunt enim
            nostrud sint ipsum proident eu eiusmod exercitation magna nisi. Sint
            est non veniam ut.
          </Text>
        </div>

        <Card>
          <Text>Select time intervals:</Text>
          <SelectBox
            defaultValue={"byDay"}
            handleSelect={(value) => handleChange(value)}
            placeholder="Select..."
            maxWidth="max-w-none"
            marginTop="mt-4"
          >
            <SelectBoxItem value={"byDay"} text="By Day" icon={undefined} />
            <SelectBoxItem value={"byHour"} text="By Hour" icon={undefined} />
            <SelectBoxItem
              value={"byMinute"}
              text="By Minute"
              icon={undefined}
            />
          </SelectBox>
        </Card>
        <Card>
          <Flex spaceX="space-x-6" alignItems="items-center">
            <Icon
              icon={Outline.UserGroupIcon}
              variant="light"
              size="xl"
              color={"gray"}
            />
            <Block spaceY="space-y-2">
              <Text>Average Revenue {byWhat()}.</Text>
              <Metric truncate={true}>{formatPrice(average.Average)}</Metric>
            </Block>
          </Flex>
        </Card>
      </ColGrid>

      <Divider />

      <ColGrid
        numColsSm={1}
        numColsMd={2}
        numColsLg={3}
        gapX="gap-x-6"
        gapY="gap-y-6"
        marginTop="mt-6"
      >
        <Card>
          <Block textAlignment="text-center" spaceY="space-y-2">
            <Icon
              icon={Outline.PlusCircleIcon}
              variant="light"
              size="xl"
              color={"red"}
            />

            <Text textAlignment="text-center">Total Sales</Text>
            <Metric truncate={true}>{data.total}</Metric>
          </Block>
        </Card>
        <Card>
          <Block textAlignment="text-center" spaceY="space-y-2">
            <Icon
              icon={Outline.CurrencyEuroIcon}
              variant="light"
              size="xl"
              color={"green"}
            />

            <Text textAlignment="text-center">Accumulated Sales</Text>
            <Metric truncate={true}>{formatPrice(data.accumulated)}</Metric>
          </Block>
        </Card>

        <Card>
          <Block textAlignment="text-center" spaceY="space-y-2">
            <Icon
              icon={Outline.UserGroupIcon}
              variant="light"
              size="xl"
              color={"blue"}
            />

            <Text textAlignment="text-center">Total Clients</Text>
            <Metric truncate={true}>{data.total}</Metric>
          </Block>
        </Card>
      </ColGrid>

      <Block marginTop="mt-6" spaceY="space-y-6">
        <Card>
          <Flex spaceX="space-x-6">
            <Icon
              icon={Outline.CurrencyEuroIcon}
              variant="light"
              size="xl"
              color={"green"}
            />
            <Block>
              <Text>Sales along time</Text>
              <Metric truncate={true}>{formatPrice(data.accumulated)}</Metric>
            </Block>
          </Flex>
          <AreaChart
            marginTop="mt-8"
            data={graphData}
            categories={["Aggregated Revenue"]}
            dataKey="time"
            colors={["green"]}
            showYAxis={true}
            showAnimation={true}
            showGradient={true}
            showLegend={false}
            showTooltip={true}
            height="h-72"
          />
        </Card>
        <Card>
          <Flex spaceX="space-x-6">
            <Icon
              icon={Outline.UserGroupIcon}
              variant="light"
              size="xl"
              color={"blue"}
            />
            <Block>
              <Text>Clients along time</Text>
              <Metric truncate={true}>{data.total}</Metric>
            </Block>
          </Flex>
          <AreaChart
            marginTop="mt-8"
            data={graphData}
            categories={["Total Clients"]}
            dataKey="time"
            colors={["blue"]}
            showYAxis={true}
            showAnimation={true}
            showGradient={true}
            showLegend={false}
            showTooltip={true}
            height="h-72"
          />
        </Card>
      </Block>
    </>
  );
}
