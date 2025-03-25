import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/News/NewsDetail.css";
import Header from "../components/News/NewsHeader";



const NewsDetail = () => {
    const { id } = useParams(); // URL에서 ID 가져오기
    const navigate = useNavigate();

    const news = [
        { id: 1, title: "오동국 교수 예술감독, 안양오페라단 정기연주회 개최!", date: "2025.03.21", author: "홍보실", content: "이 공연은..." },
        { id: 2, title: "스포츠산업체육학과 산학협력 업무협약 체결!", date: "2025.03.20", author: "홍보실", content: "협약 내용은..." },
        { id: 3, title: "제26기 여성지도자 아카데미 입학식 성료!", date: "2025.03.19", author: "홍보실", content: "입학식이 성황리에..." },
        { id: 4, title: "우리 대학 스포츠단 검도부 장지원 선수 2025 검도 국가대표 상비군 선발!", date: "2025.03.19", author: "홍보실", content: "입학식이 성황리에..." },
        { id: 5, title: "우리 대학과 피닉스스튜디오 업무협약 체결!", date: "2025.03.19", author: "홍보실", content: "입학식이 성황리에..." },
        { id: 6, title: "우리 대학과 SBS아카데미게임학원 업무협약식", date: "2025.03.19", author: "홍보실", content: "입학식이 성황리에..." },

    ];

    const newsItem = news.find(item => item.id === parseInt(id));

    if (!newsItem) {
        return <div className="news-detail">해당 뉴스를 찾을 수 없습니다.</div>;
    }

    return (
        <div className="news-detail">
             <Header />
             <div className="detail">
             <h2 className="title">{newsItem.title}</h2>
            <p><strong>작성자:</strong> {newsItem.author}</p>
            <p><strong>작성일:</strong> {newsItem.date}</p>
            <p className="news-content">{newsItem.content}</p>
         </div>
        </div>
    );
};

export default NewsDetail;