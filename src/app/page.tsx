import Link from "next/link";

export default function Home() {
  return (
    <header>
      <h1 className="text-2xl"> ToDos </h1>
      <Link href="/new">New</Link>
    </header>
  );
}
