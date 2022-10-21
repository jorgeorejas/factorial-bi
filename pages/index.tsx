import { Tab } from "@headlessui/react";
import { Block, Card, ColGrid } from "@tremor/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
const Home: NextPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // a funciton that listens for keyboard combinations
  const handleKeyDown = (event: KeyboardEvent) => {
    // if command/control + 1 is pressed
    if (event.ctrlKey && event.key === "1") {
      // set the selected index to 0
      setSelectedIndex(0);
    }
    // if command/control + 2 is pressed
    if (event.ctrlKey && event.key === "2") {
      // set the selected index to 1
      setSelectedIndex(1);
    }
  };
  // add the event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // remove the event listener
  }, []);

  return (
    <div className="p-4 ">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <div className="flex">
          <Tab.List className="flex">
            <Tab className="p-2 rounded-t-lg outline-none">
              <h1>
                Dashboard{" "}
                <span className="ml-1 text-xs uppercase bg-gray-200 rounded-lg px-1 py-0.5 text-gray-700">
                  ctrl + 1
                </span>
              </h1>
            </Tab>
            <Tab className="p-2 rounded-t-lg outline-none">
              <h1>
                Manage data{" "}
                <span className="ml-1 text-xs uppercase bg-gray-200 rounded-lg px-1 py-0.5 text-gray-700">
                  ctrl + 2
                </span>
              </h1>
            </Tab>
          </Tab.List>
          <div></div>
        </div>
        <Tab.Panels>
          <Tab.Panel as={Card} marginTop="mt-4" hFull={true}>
            <ColGrid numColsMd={2} numColsLg={3} gapX="gap-x-6" gapY="gap-y-6">
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
            </ColGrid>

            <Block marginTop="mt-6">
              <Card>
                <div className="h-80" />
              </Card>
            </Block>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Home;
