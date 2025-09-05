import Image from "next/image";
import Link from "next/link";
import ProductCart from "./components/ProductCart";

export default function Home() {
  return (
    <main>
      Hello world <br />
      <Link href="/users" className="text-blue-600 text-center">users</Link><br />
      <ProductCart/>
    </main>
  );
}
