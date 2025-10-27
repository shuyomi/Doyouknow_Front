import React, { useState } from 'react';
import 'primereact/resources/themes/lara-light-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './AnyangPage.css';
import FirstBuilding from './Building/FirstBuilding';
import SecondBuilding from './Building/SecondBuilding';
import ThirdBuilding from './Building/ThirdBuilding';
import FourthBuilding from './Building/FourthBuilding';
import FifthBuilding from './Building/FifthBuilding';
import SixthBuilding from './Building/SixthBuilding';
import SeventhBuilding from './Building/SeventhBuilding';
import EighthBuilding from './Building/EighthBuilding';

const buildings = [
  { id: 1, name: "대신관"},
  { id: 2, name: "수리관" },
  { id: 3, name: "수봉관 " },
  { id: 4, name: "일우중앙도서관"},
  { id: 5, name: "아리관"},
  { id: 6, name: "비전관"},
  { id: 7, name: "문화예술관"}
];

const Test = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

    const renderModalContent = () => {
    switch (selectedBuilding?.id) {
      case 1:
        return <FirstBuilding />;
      case 2:
        return <SecondBuilding />;
      case 3:
        return <ThirdBuilding />;
      case 4:
        return <FourthBuilding />;
     case 5:
        return <FifthBuilding />;
       case 6:
        return <SixthBuilding />;
      case 7:
        return <SeventhBuilding />;
      case 8:
        return <EighthBuilding />;
   
      default:
        return <div>준비 중입니다.</div>;
    }
  };

  return (
     <div className="anyang-page">
      <div className="map-container">
        <img src="/images/CampusAnyang.png" alt="캠퍼스 지도" className="campus-map" />
      </div>

      <div className="button-list">
        {buildings.map((b, i) => (
          <button
            key={b.id}
            className="building-button"
            onClick={() => setSelectedBuilding(b)}
          >
            {String.fromCharCode(65 + i)}. {b.name}
          </button>
        ))}
      </div>

      {selectedBuilding && (
        <div className="modal-overlay" onClick={() => setSelectedBuilding(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className= "modal-header">
          <h2>{selectedBuilding.name}</h2>
          </div>
          {renderModalContent()}
          <button className="custom-close-button" onClick={() => setSelectedBuilding(null)}>
            닫기
          </button>
          </div>
           
        </div>
      )}
    </div>
  );
};
export default Test;

