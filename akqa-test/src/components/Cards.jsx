import '../Card.css'
import '../App.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export function BubbleCard(props) {
    return (

        <div className="bub-card-content">
            <div className="bub-img"><img src={props.image} alt={props.title} /></div>
            <div className="bub-txt-container">
                <h3>{props.title}</h3>
                <p>{props.descrip}</p>
            </div>
            <a href="#" onClick={() => alert(`You have clicked on ${props.link}`)} className='pinkLink'>{props.link}</a>
        </div>


    )
}

export function DefaultCard(props) {
    return (

        <div className="card-container">
            <div className='card-img'><img src={props.image} alt={props.title} /></div>
            <div className='c-txt'>
                <h3>{props.title}</h3>
                <p>{props.descrip}</p>
                <a href="#" onClick={() => alert(`You have clicked on ${props.link}`)} className='pinkLink'>{props.link}</a>
            </div>
        </div>

    )
}

export function VideoCard(props) {
    return (
        <div className='vCard'>
            <div className='e-video'> {/*A video should go here instead of div*/}
                <PlayCircleIcon sx={{ color: "var(--secondaryC)", fontSize:"30pt" }}/>
            </div>
            <div className='e-txt'>
                <h5>{props.title}</h5>
                <p>{props.descrip}</p>
            </div>
        </div>
    )
}