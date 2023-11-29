function Secondarynav({ showThird, setShowThird }) {
  const secondNav = [
    {
      navTitle: "Adtralza",
    },
    {
      navTitle: "Diavonex",
    },
    {
      navTitle: "Diavobet",
    },
    {
      navTitle: "Enstilar",
    },
    {
      navTitle: "Fucidin",
    },
    {
      navTitle: "Kyntheum",
    },
    {
      navTitle: "Protopic",
    },
    {
      navTitle: "Skinoren",
    },
    {
      navTitle: "Tralokinumab",
    },
    {
      navTitle: "Xamiol",
    },
  ];

  return (
    <ul className="flex flex-col md:flex-row gap-5 bg-leoGray py-5 px-10">
      {secondNav.map((item) => (
        <li key={item.navTitle}>
          <button className="focus:border-b-2 foocus:text-leoBlue focus:border-solid focus:border-leoBlue" onClick={() => setShowThird(!showThird)}>
            {item.navTitle}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Secondarynav;
