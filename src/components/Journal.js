export default function Journal(props) {
    return (
        <section>
          <img className="journal--image" src={`./images/${props.imageUrl}`} alt="Mount Fuji Image" />
          <div className="journal--details">
            <div className="journal--location">
              <img className="pin-logo" src="./images/pin.svg" />
              <span className="journal--country text-color">{props.location}</span>
              <span><a className="link-color" target="_blank" href={props.googleMapsUrl}>View on Google Maps</a></span>
            </div>
            <h2 className="journal--title text-color">{props.title}</h2>
            <h4 className="text-color">{`${props.startDate} - ${props.endDate}`}</h4>
            <p className="journal--description text-color">{props.description}</p>
          </div>
        </section>
    )
  }