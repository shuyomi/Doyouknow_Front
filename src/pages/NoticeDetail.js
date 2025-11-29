import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NoticeDetailHeader from "../components/Notice/NoticeDetailHeader";
import "../styles/Notice/NoticeDetail.css";


// img 태그의 이미지 상대 경로를 절대 경로로 바꿔주는 함수
const addBaseUrlToImageSrc = (htmlString) => {
    const parser = new DOMParser(); // HTML 문자열 파싱하여 DOM 생성
    const doc = parser.parseFromString(htmlString, "text/html");
    const images = doc.querySelectorAll("img"); // 모든 img 태그 선택

    images.forEach((img) => {
        //선택된 img 태그에 대한 수행
        const src = img.getAttribute("src");
        if (src && !src.startsWith("https://")) {
            // src값이 존재하며, 절대경로로 시작하지 않으면
            img.setAttribute("src", `https://www.anyang.ac.kr${src}`); // 앞에 경로 붙여서 return
        }

        // 이미지 크기 설정
        img.setAttribute("width", "400");
        img.setAttribute("height", "600");
    });

    return doc.body.innerHTML;
};

const NoticeDetail = () => {
    const { id } = useParams();
    const [noticeData, setNoticeData] = useState(null);

    useEffect(() => {
        axios
            .get(`https://doyouknow.shop/notice/detail/${id}`)
            .then((res) => {
                console.log("Detail API 응답:", res.data);
                setNoticeData(res.data);
            })
            .catch((err) => console.error("API 호출 오류:", err));
    }, [id]);

    if (!noticeData) {
        return <div>Loading...</div>;
    }

    const updatedBody = addBaseUrlToImageSrc(noticeData.noticeBody);

    return (
        <div>
            <NoticeDetailHeader />
            <div className="noticeDetail-container">
                <div className="noticeDetail-fixed">
                    <div className="noticeDetail-title">{noticeData.noticeTitle}</div>
                    <div className="notice-footer">
                        <span className="date">{noticeData.noticeDate}</span>
                        <span className="divider">|</span>
                        <span className="author">{noticeData.noticeWriter}</span>
                    </div>
                </div>
                <div
                    className="noticeDetail-body"
                    dangerouslySetInnerHTML={{ __html: updatedBody || "" }}
                />
                <div className="original-link-container">
                    <a
                        href={noticeData.noticeUrl || "#"}
                        target={noticeData.noticeUrl ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={`original-link-button ${!noticeData.noticeUrl ? "disabled" : ""}`}
                        onClick={(e) => {
                            if (!noticeData.noticeUrl) {
                                e.preventDefault();
                                alert("원본 링크 정보가 없습니다.");
                            }
                        }}
                    >
                        <span>원본 사이트로 이동하기</span>
                        <span className="external-icon">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NoticeDetail;
