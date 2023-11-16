import Image from "next/image";
import Logo from "./logo.png";
async function MainNavigation() {
  return (
    <nav className="mb-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center m-6">
        <div className="mb-6 md:mb-0">
          <Image src={Logo} width={200} height={200}></Image>
        </div>
        <div className="md:ml-6">
          <input
            className="border border-gray-300 rounded-full px-2 py-2 text-xs md:w-48"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <ul className="mt-12 flex flex-col md:flex-row md:justify-around">
        <li className="mb-4 md:mb-0 md:mr-4">Bedingungen</li>
        <li className="mb-4 md:mb-0 md:mr-4">Behandlungen</li>
        <li className="mb-4 md:mb-0 md:mr-4">Veranstaltungen</li>
        <li className="mb-4 md:mb-0 md:mr-4">Werkzeuge</li>
        <li className="mb-4 md:mb-0">Forschung und Erkenntnisse</li>
      </ul>
    </nav>
  );
}
export default MainNavigation;
