import React, { useState } from 'react';
import './AnyangPage.css';
import Building1 from './Building/Building1';
import Building2 from './Building/Building2'; 
import Building3 from './Building/Building3';
import Building4 from './Building/Building4'; 
import Building5 from './Building/Building5'; 
import Building6 from './Building/Building6'; 
import Building7 from './Building/Building7'; 
/*import Building8 from './Building/Building8'; */
import Building9 from './Building/Building9'; 
/*import Building10 from './Building/Building10'; */



const AnyangPage = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null); // 선택된 건물 상태

  const buildings = [
    '대신관',
    '수리관',
    '수봉관',
    '일우중앙도서관',
    '아리관',
    '비전센터',
    '창의융합관',
    '문화관',
  
  ];

  const handleBuildingClick = (building) => {
    setSelectedBuilding(building); // 클릭한 건물 설정
  };

  const handleBackClick = () => {
    setSelectedBuilding(null); // 뒤로 가기 클릭 시, 건물 선택 초기화
  };

  return (
    <div className='anyang-page'>
      {selectedBuilding ? (
        <div className='building-detail'>
          {/* 선택된 건물이 있으면, 해당 건물 정보를 렌더링 */}
          {selectedBuilding === '대신관' && <Building1 />}
          {selectedBuilding === '수리관' && <Building2 />}
          {selectedBuilding === '수봉관' && <Building3 />}
          {selectedBuilding === '일우중앙도서관' && <Building4 />}
          {selectedBuilding === '아리관' && <Building5 />}
          {selectedBuilding === '비전센터' && <Building6 />}
          {selectedBuilding === '창의융합관' && <Building7 />}
          {selectedBuilding === '문화관' && <Building9 />}
          {/*selectedBuilding === '구름, 나뭇잎사이로' && <Building10 />*/}
          {/*selectedBuilding === '태양광장' && <Building8 />*/}


          <button className='back-button' onClick={handleBackClick}>
            돌아가기
          </button>
        </div>
      ) : (
        <div className='building-list'>
          {/* AnyangPage 내용 (건물 리스트) */}
          {buildings.map((building, index) => (
            <div key={index} className='building-card'onClick={() => handleBuildingClick(building)}>
               <img src="/images/Placeicon.png" alt="아이콘" className="building-icon" />
              {building}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnyangPage;