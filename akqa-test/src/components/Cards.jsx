import '../App.css'

export function BubbleCard(props) {
    return (
        <>
            <div className="bub-card-content">
                <div className="bub-img"><img src={props.image} alt="..." /></div>
                <div className="bub-txt-container">
                    <h3>{props.title}</h3>
                    <p>{props.descrip}</p>
                </div>
                <a href="#" onClick={() => alert(`You have clicked on ${props.link}`)}>{props.link}</a>
            </div>
        </>

    )
}