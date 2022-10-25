import InfoCard from "./InfoCard";
import cardImage2 from "../assets/svg/icons/hand-heart.svg";
import cardImage3 from "../assets/svg/icons/hand-shield.svg";

export default function InfoCards() {
    // Dynamic cards -> props to InfoCard.js
    // Does card #3 need text in the Figma file? I added a sample text.
    let infoCardData = [
        {
            id: '1',
            topContent: '',
            topContentHeader: '9',
            topContentSub: 'OUT OF 10',
            headerText: 'Long term sustained improvement',
            description: '9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡).',
            linkText: 'See efficacy and trial data',
            link: '#'
        },
        {
            id: '2',
            topContent: `${cardImage2}`,
            topContentHeader: '',
            topContentSub: '',
            headerText: 'Improvements in the burden of disease',
            description: 'Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(12,13).',
            linkText: 'Learn more about quality of life improvements',
            link: '#'
        },
        {
            id: '3',
            topContent: `${cardImage3}`,
            headerText: 'Good safety profile',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id diam ut justo dapibus laoreet. Pellentesque ex ex, commodo vel consectetur sed, egestas sit amet massa. Suspendisse vitae velit et orci vestibulum.',
            linkText: 'See safety profile',
            link: '#'
        }
    ]

    return(
        <section className="infoCards bgWhite">
            <div className="infoCardsContainer contentPadding">
                {
                    infoCardData.map(({topContent, topContentHeader, topContentSub, headerText, description, id, link, linkText}, index) => {
                        return (
                            <InfoCard 
                                topContent={topContent}
                                topContentHeader={topContentHeader}
                                topContentSub={topContentSub}
                                headerText={headerText}
                                link={link}
                                description={description}
                                linkText={linkText} 
                                key={id} 
                            />
                        )
                    })
                }
            </div>
        </section>
    );
}