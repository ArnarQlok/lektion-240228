import profilePic from "../../assets/profile.jpg";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="" />
      <h2 className="card-title">Arnar</h2>
      <p className="card-text">Jag lär ut React och spelar gura.</p>
    </div>
  );
}

export default Card;
