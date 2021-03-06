import "./poster.css"
import posterImage from "../../assets/images/poster.jpg"
export const Poster = () =>{
    return(
        <section className="poster">
          <div className="poster-container">
            <img
              src={posterImage}
              alt="Volleyball poster image"
              className="img-responsive poster-image"
            />
            <div className="text-container1">
                <button className="button-style-none outline-button change-color">
                    Explore
                </button>
            </div>
          </div>
        </section>
    )
}