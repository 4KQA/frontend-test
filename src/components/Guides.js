import GuidesCard from "./GuidesCard";
import guideHeader1 from "../assets/images/Dosing-Guide-Header.png";
import guideHeader2 from "../assets/images/Self-Injection-Guide-Header.png";

export default function Guides() {
    let guidesCardData = [
        {
            id: '1',
            header: 'Dosing guide',
            headerImage: `${guideHeader1}`,
            description: 'Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1). ',
            link: '#dosingguide',
            linkText: 'Learn more about application and dosing'
        },
        {
            id: '2',
            header: 'Patient injection made simple',
            headerImage: `${guideHeader2}`,
            description: 'This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton.',
            link: '#patientselfinjection',
            linkText: 'Watch the video'
        }
    ]

    return(
        <section className="guidesSection">
            <div className="guidesContainer contentPadding">
                <h2>Clinical tools - at a glance</h2>
                <div className="guidesCards">
                    {
                        guidesCardData.map(({headerImage, header, description, link, linkText, id}, index) => {
                            return (
                                <GuidesCard 
                                    headerImage={headerImage}
                                    header={header}
                                    description={description}
                                    link={link}
                                    linkText={linkText}
                                    key={id}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}