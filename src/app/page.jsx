import PrimaryNavigation from "./components/PrimaryNavigation";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
        <PrimaryNavigation/>
      <main>
        <h1>This is h1</h1>
        <h2>This is h2</h2>
        <h3>This is h3</h3>
        <h4>This is h3</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, beatae! Odit error repellat dolorum? Totam voluptatem repellat consectetur quasi corrupti.</p>
      </main>
    </div>
  );
}
