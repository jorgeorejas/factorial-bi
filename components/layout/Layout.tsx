import { Button } from "@tremor/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Layout({
  children,
  selected,
}: {
  children: any;
  selected: "dashboard" | "manager";
}) {
  return (
    <>
      <Head>
        <title>Factorial BI | {selected}</title>
        <meta name="description" content="Factorial BI" />
        <link rel="icon" href="/factorial.svg" />
      </Head>
      <div className="p-4">
        <Header selected={selected} />
        {children}
      </div>
    </>
  );
}
function Header({ selected }: { selected: "dashboard" | "manager" }) {
  const [seedButton, setSeedButton] = useState("Seed 100");
  const [removeButton, setRemoveButton] = useState("Remove All");

  function seedDB() {
    fetch("/api/seedDB");
    setSeedButton("Seeding...");
    setTimeout(() => {
      window.location.reload();
    }, 40000);
  }

  function removeAll() {
    fetch("/api/removeAll");
    setRemoveButton("Removing...");
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  }

  return (
    <div className="flex justify-between">
      <div className="flex">
        <Link href="/">
          <a
            className={`${
              selected == "dashboard" ? "underline" : ""
            } p-2 rounded-t-lg outline-none`}
          >
            <h1>Dashboard </h1>
          </a>
        </Link>
        <Link href="/manage">
          <a
            className={`${
              selected == "manager" ? "underline" : ""
            } p-2 rounded-t-lg outline-none`}
          >
            <h1>Manage data </h1>
          </a>
        </Link>
      </div>
      <div className="flex gap-2">
        <Button
          text={seedButton}
          importance="secondary"
          size="sm"
          color="green"
          handleClick={() => seedDB()}
        />
        <Button
          text={removeButton}
          importance="primary"
          size="sm"
          color="red"
          handleClick={() => removeAll()}
        />
      </div>
    </div>
  );
}
