import Image from "next/image";
import LeoLogo from "./Leologo.png";
import Link from "next/link";

async function Footer() {
  return (
    <footer className=" bg-sky-600 p-12">
      <Image src={LeoLogo} width={100} height={100}></Image>
      <ul className="flex text-white gap-6  justify-center">
        <Link href="/">
          <li>Contact </li>
        </Link>
        <Link href="/">
          <li>Impirint </li>
        </Link>
        <Link href="/">
          <li>Conditions </li>
        </Link>
        <Link href="/">
          <li>Terms of use </li>
        </Link>
        <Link href="/">
          <li>Privacy </li>
        </Link>
        <Link href="/">
          <li>Cookie content </li>
        </Link>
      </ul>
    </footer>
  );
}
export default Footer;
