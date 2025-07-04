import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import 'primereact/resources/themes/lara-light-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './AnyangPage.css';
import FirstBuilding from './FirstBuilding';

const buildings = [
  { id: 1, name: "아리관"},
  { id: 2, name: "제1과학관" },
  { id: 3, name: "제2과학관" },
  { id: 4, name: "도서관"},
  { id: 5, name: "학생회관"},
  { id: 6, name: "기숙사"},
  { id: 7, name: "예술관"},
  { id: 8, name: "체육관"}
];

const Test = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

    const renderModalContent = () => {
    switch (selectedBuilding?.id) {
      case 1:
        return <FirstBuilding />;
    /*case 2:
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
      */
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
        {buildings.map((b) => (
          <button
            key={b.id}
            className="building-button"
            onClick={() => setSelectedBuilding(b)}
          >
            {b.name}
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

