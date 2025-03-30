import React from "react";
import { useParams } from "react-router-dom";
import "../styles/News/NewsDetail.css";
import Header from "../components/News/NewsHeader";
//import axios from "axios";

{/*const addBaseUrlToImageSrc = (htmlString) => {
    const parser = new DOMParser(); // HTML 문자열 파싱하여 DOM 생성
    const doc = parser.parseFromString(htmlString, "text/html");
    const images = doc.querySelectorAll("img"); // querySelectorAll를 사용하여 img 태그를 선택

    images.forEach((img) => {
        //선택된 img 태그에 대한 수행
        const src = img.getAttribute("src");
        if (src && !src.startsWith("https://")) {
            // src값이 존재하며, 절대경로로 시작하지 않으면
            img.setAttribute("src", `https://www.anyang.ac.kr${src}`); // 앞에 경로 붙여서 return
        }
    });

    return doc.body.innerHTML;
};
*/}

const NewsDetail = () => {
    const { id } = useParams(); // URL에서 ID 가져오기
    //const [newsData, setNewsData] = useState(null);




    const news = [
        { id: 1, title: "오동국 교수 예술감독, 안양오페라단 정기연주회 개최!", date: "2025.03.21", author: "홍보실", content: "이 공연은..." },
        { id: 2, title: "스포츠산업체육학과 산학협력 업무협약 체결!", date: "2025.03.20", author: "홍보실", content: "협약 내용은..." },
        { id: 3, title: "제26기 여성지도자 아카데미 입학식 성료!", date: "2025.03.19", author: "홍보실", content: "입학식이 성황리에..." },
        { id: 4, title: "우리 대학 스포츠단 검도부 장지원 선수 2025 검도 국가대표 상비군 선발!", date: "2025.03.19", author: "홍보실", content: "입학식이 성황리에..." },
        { id: 5, title: "우리 대학과 피닉스스튜디오 업무협약 체결!", date: "2025.03.19", author: "홍보실", content: "입학식이 성황리에..." },
        { id: 6, title: "우리 대학과 SBS아카데미게임학원 업무협약식", date: "2025.03.19", author: "홍보실", content: "입학식이 성황리에..." },

    ];

    const newsItem = news.find(item => item.id === parseInt(id));



    {/* useEffect(() => {
        axios
            .get(`http://localhost:8080/news/detail/${id}`)
            .then((res) => {
                console.log("Detail API 응답:", res.data);
                setNewsData(res.data);
            })
            .catch((err) => console.error("API 호출 오류:", err));
    }, [id]);

    if (!newsData) {
        return <div>Loading...</div>;
    }

    const updatedBody = addBaseUrlToImageSrc(newsData.newsBody);
*/}


    return (
        <div className="news-detail">
             <Header />
             <div className="detail">
             <h2 className="title">{newsItem.title}</h2>
            <p><strong>작성자:</strong> {newsItem.author}</p>
            <p><strong>작성일:</strong> {newsItem.date}</p>
            <p className="news-content">{newsItem.newscontent}</p>
         </div>





         {/** <div className="detail">
             <h2 className="title">{newsItem.newsTitle}</h2>
            <p><strong>작성자:</strong> {newsItem.newsAuthor}</p>
            <p><strong>작성일:</strong> {newsItem.newsDate}</p>
            <p className="news-content" dangerouslySetInnerHTML={{ __html: updatedBody || "" }}/>
         </div> */}
        </div>
    );
};

export default NewsDetail;