import { sourceSans } from "../fonts";
export default function Menu() {
  return (
    <div>
      <ul className={`${sourceSans.className} hidden lg:flex justify-between`}>
        <li>
          <button aria-expanded="false" href="#">
            Bedingungen
          </button>
        </li>
        <li>
          <button aria-expanded="false" href="#">
            Behandlungen
          </button>
        </li>
        <li>
          <button aria-expanded="false" href="#">
            Veranstaltungen
          </button>
        </li>
        <li>
          <button aria-expanded="false" href="#">
            Werkzeuge
          </button>
        </li>
        <li>
          <button aria-expanded="false" href="#">
            Forschung und Erkenntnisse
          </button>
        </li>
      </ul>
    </div>
  );
}
