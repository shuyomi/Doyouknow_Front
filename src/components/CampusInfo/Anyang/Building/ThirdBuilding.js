import React, { useState } from 'react';
import './Building.css'; // 모든 건물 공통 스타일 분리

const ThirdBuilding = () => {
  const [floor, setFloor] = useState("1층");

  const floorList = ["8F", "7F", "6F", "5F", "4F", "3F", "2F", "1F", "B1F"];

  const floorData = {

    };

  return (
    <div className="modal-body">
      <div className="floor-tabs-vertical">
        {floorList.map((f) => (
          <button
            key={f}
            className={`floor-button ${floor === f ? "active" : ""}`}
            onClick={() => setFloor(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="floor-details">
        <ul>
          {floorData[floor]?.map((room, idx) => (
            <li key={idx}>{room}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThirdBuilding;