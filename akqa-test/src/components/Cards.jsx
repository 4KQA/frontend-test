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

export function DefaultCard(props){
    return(

            <div className="card-container">
                <div className='card-img'><img src={props.image} alt={props.title} /></div>
                <h3>{props.title}</h3>
                <p>{props.descrip}</p>
                <a href="#" onClick={() => alert(`You have clicked on ${props.link}`)} className='pinkLink'>{props.link}</a>
            </div>

    )
}

export function VideoCard(props){
    return(
        <div>
            <div className='e-video'> {/*A video should go here instead of div*/}
                <PlayCircleIcon/>
            </div> 
            <h6>{props.title}</h6>
            <p>{props.descrip}</p>
        </div>
    )
}