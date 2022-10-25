export default function InfoCard({ topContent, topContentHeader, topContentSub, headerText, description, link, linkText}) {
    return(
        <div className="infoCard">
            {/* Just for this example - would probably be better to render everything as SVG's */}
            {topContent ? 
                <img src={topContent} alt={headerText} title={headerText}></img>
                
                : 
                 
                <div className="textCardTop">
                    <h3>{topContentHeader}</h3>
                    <p>{topContentSub}</p>
                </div>
            }
            
            <h3>{headerText}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
        </div>
    );
}