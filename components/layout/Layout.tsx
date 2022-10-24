import Head from "next/head";
import Link from "next/link";

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
  return (
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
  );
}
