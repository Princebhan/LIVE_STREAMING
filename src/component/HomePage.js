import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import photo from "./streaming_paltform.png"
import third from "./third.png"
import first from "./first.png"
import second from './second.png'
function HomePage() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const inputStyle = {
    padding: "10px",
    margin: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px",
    margin: "5px",
    borderRadius: "5px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
  };

  const handleJoin = () => {
    navigate(`/room/${roomId}`);
  };

  return (
    <div>
      <h1 >Welcome To TalkCom&#129395;</h1>
      <input
        type="text"
        placeholder="Create Room Id"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleJoin} style={buttonStyle}>
        Join
      </button>
      {/* start  */}
    <div className="text-left"> <h3>Looking Like These &#129321;</h3></div> 
      <div id="carouselExampleIndicators" className="carousel slide my-4" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={first} className="d-block w-100" alt="..." style={{height:"400px",width:"10px"}}/>
    </div>
    <div className="carousel-item">
      <img src={second} className="d-block w-100" alt="..."  style={{height:"400px",width:"10px"}}/>
    </div>
    <div className="carousel-item">
      <img src={third} className="d-block w-100" alt="..."  style={{height:"400px",width:"10px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      {/* end */}

    </div>
  );
}

export default HomePage;
