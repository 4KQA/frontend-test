import Image from "next/image";
import Logo from "./logo.png";
async function MainNavigation() {
  return (
    <nav className="mb-12">
      <div className="flex justify-between m-6">
        <div className="div">
          <Image src={Logo} width={200} height={200}></Image>
        </div>
        <div className="">
          <input
            className="border border-gray-300 rounded-full px-2 py-2 text-xs"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <ul className="mt-12 flex justify-around">
        <li>Bedingungen</li>
        <li>Behandlungen</li>
        <li>Veranstaltungen</li>
        <li>Werkzeuge</li>
        <li>Forschung und Erkenntnisse</li>
      </ul>
    </nav>
  );
}
export default MainNavigation;
