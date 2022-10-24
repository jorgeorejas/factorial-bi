import Link from "next/link";

export default function Layout({
  children,
  selected,
}: {
  children: any;
  selected: "dashboard" | "manage";
}) {
  return (
    <div className="p-4">
      <Header selected={selected} />
      {children}
    </div>
  );
}
function Header({ selected }: { selected: "dashboard" | "manage" }) {
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
            selected == "manage" ? "underline" : ""
          } p-2 rounded-t-lg outline-none`}
        >
          <h1>Manage data </h1>
        </a>
      </Link>
    </div>
  );
}
