import react from "react"
export default function Card(props){

    let badgeText
    if(props.tag){
        badgeText = props.tag
    }



    return (


        <div className="cards">
            {
               badgeText &&
               <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`${props.coverImg}`}
                className="card--image"
            />
            <div className="card-attributes">
            <div className="card--stats">
                <div className="card--allign">
                <img src="/images/star.png" className="card--star" />
                <div className="star">{props.stats.rating}</div>
                <div className="gray-1">({props.stats.reviewCount})</div>
                </div>
                {/* <div className="gray-2">{props.tag}</div> */}
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">Rent ${props.price}</span>
            </p>
            </div>

        </div>

    )
}