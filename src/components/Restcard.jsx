const Restcard = (props) => {
    const { data } = props;
    const {name,image,cfo,cft,rating,locality}=data.info;
    return (
      <div className="restcard">
        <div className="card-image">
          <img
            className="restimage"
            alt="restcard-image"
            src={image.url}
          />
        </div>
        <div>
          <h3>{name}</h3>
          {/* <div>
                <h4>Cuisine:</h4>
                {data.info.cuisine.map((cuisineItem, idx) => (
                  <h5 key={idx}>{cuisineItem.name}</h5> // Adjust based on your actual cuisine item structure
                ))}
              </div> */}
          {/* <h3>{data?.info?.cuisine}</h3> */}
          <h3>{cfo.text}</h3>
          <h3>{cft.text}</h3>
          <h3>{locality?.name}</h3>
          <h4>{rating.aggregate_rating}</h4>
          <h5>{data.order.deliveryTime}</h5>
        </div>
      </div>
    );
  };
  export default Restcard;