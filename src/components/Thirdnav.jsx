function Thirdnav() {
  const thirdNav = [
    {
      navTitle: "Overview",
    },
    {
      navTitle: "Mode of Action",
    },
    {
      navTitle: "Efficacy",
    },
    {
      navTitle: "Quality of Life",
    },
    {
      navTitle: "Safety",
    },
    {
      navTitle: "Dosing",
    },
    {
      navTitle: "News",
    },
    {
      navTitle: "Technical Information",
    },
  ];

  return (
    <ul className="flex flex-row gap-5 bg-leoBlue text-white py-5 px-10 ">
      {thirdNav.map((item) => (
        <li key={item.navTitle}>
          <button className="focus:border-b-2 foocus:text-leoBlue focus:border-solid focus:border-white">{item.navTitle}</button>
        </li>
      ))}
    </ul>
  );
}

export default Thirdnav;
