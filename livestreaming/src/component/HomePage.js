import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();
  const handleJoin = () => {
    navigate(`/room/${roomId}`);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Room Id"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
}

export default HomePage;
