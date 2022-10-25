export default function GuidesCard({ headerImage, header, description, link, linkText }) {
    return(
        <article className="guidesCard bgGray">
            <img src={headerImage} alt={header} title={header}></img>
            <div className="guidesCardText">
                <h3>{header}</h3>
                <div className="guidesCardDescription">
                    <p>{description}</p>
                    <a href={link} rel="noopener noreferrer">{linkText}</a>
                </div>
            </div>
        </article>
    );
}