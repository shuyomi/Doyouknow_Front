import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/News/News.css';
import Header from "../components/News/NewsHeader";
import NewsList from "../components/News/NewsList";
//import axios from "axios";

const News = () => {

    
    const navigate = useNavigate();

    const news = [
        {
            id: 1,
            title: "오동국 교수 예술감독, 안양오페라단 정기연주회 ‘名品 오페라 콘서트’ 24일 공연!",
            date: "2025.03.21",
            author: "홍보실",
        },
        {
            id: 2,
            title: "우리 대학 스포츠산업체육학과 SCL코리아 산학협력 업무협약 체결!",
            date: "2025.03.20",
            author: "홍보실",
        },
        {
            id: 3,
            title: "우리 대학 제26기 여성지도자 아카데미 입학식 성료!",
            date: "2025.03.19",
            author: "홍보실",
        },
        {
            id: 4,
            title: "우리 대학 스포츠단 검도부 장지원 선수 2025 검도 국가대표 상비군 선발!",
            date: "2025.03.19",
            author: "홍보실",
        },
        {
            id: 5,
            title: "우리 대학과 피닉스스튜디오 업무협약 체결 ",
            date: "2025.03.18",
            author: "홍보실",
        },
        {
            id: 6,
            title: "우리 대학과 SBS아카데미게임학원 업무협약식",
            date: "2025.03.17",
            author: "홍보실",
        },
        {
            id: 7,
            title: "우리 대학과 SBS아카데미게임학원 업무협약식",
            date: "2025.03.17",
            author: "홍보실",
        },
        {
            id: 8,
            title: "우리 대학과 SBS아카데미게임학원 업무협약식",
            date: "2025.03.17",
            author: "홍보실",
        },
        {
            id: 9,
            title: "우리 대학과 SBS아카데미게임학원 업무협약식",
            date: "2025.03.17",
            author: "홍보실",
        },
        {
            id: 10,
            title: "우리 대학과 SBS아카데미게임학원 업무협약식",
            date: "2025.03.17",
            author: "홍보실",
        },


    ];

    const handleNewsClick = (id) => {
        navigate(`/news/${id}`);
    };


    /*const [news, setNews] = useState("전체");
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/news/all")
            .then((res) => {
                console.log("API 응답:", res.data);
                setNews(res.data);
            })
            .catch((err) => console.error("API 호출 오류:", err));
    }, []);*/


    return (
      <div className="News-contents">
      <Header />
      <NewsList news={news} onNewsClick={handleNewsClick} /> 

      </div>
    );
};

export default News;
