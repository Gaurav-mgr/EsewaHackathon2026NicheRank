
export default function Services({services}){
  const serviceItems = services[0]
  return(
    <section>
      <div className="service-container">
        <p>Featured Services</p>
        <div className="card-container">
          {
            Object.keys(serviceItems).map((key) => {
              const {id, overlay, image, title} = serviceItmes[key];
              return(
                <div className="card" key = {key}>
                  <div className="overlay"><p>{overlay}</p></div>
                  <div className="image"><img src={image}></img></div>
                  <div className="title"><p>{title}</p></div>
                  <div className="bottom"><a href="#">View Details</a></div>
                </div>
              )
            }) 
          }
        </div>
      </div>
    </section>
  )
}