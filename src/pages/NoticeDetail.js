import React, { useEffect } from "react";
import NoticeDetailHeader from "../components/Notice/NoticeDetailHeader";
import "../styles/Notice/NoticeDetail.css";

const addBaseUrlToImageSrc = (htmlString) => {
    return htmlString.replace(/<img\s+[^>]*src="([^"]+)"/g, (match, src) => {
        const updatedSrc = src.startsWith("https://www.anyang.ac.kr")
            ? src
            : `https://www.anyang.ac.kr${src}`;
        return match.replace(src, updatedSrc);
    });
};

const NoticeDetail = () => {
    const noticeData = {
        title: "안녕하세요",
        date: "2025.03.07",
        author: "대학원교학과",
        body: `<div class="b-content-box">
          <div class="fr-view">
            <p>
              <div class="img-link-box">
                <a href="/_attach/anyang/editor-image/2025/03/sSoSHfJseVopnRItVEqrsejUuS.png" target="_blank" title="이미지 새창보기">
                  <img src="/_attach/anyang/editor-image/2025/03/sSoSHfJseVopnRItVEqrsejUuS.png" class="fr-fic fr-dib" data-path="/_attach/anyang/editor-image/2025/03/sSoSHfJseVopnRItVEqrsejUuS.png" data-size="173753" data-success="true" data-file_name="sSoSHfJseVopnRItVEqrsejUuS.png" data-width="632" data-alt="screen shot" data-height="888" style="width: 632px;">
                </a>
              </div>
            </p>
            <p>[제6회 안양대학교 학생생활 사진공모전]</p>
            <p><br></p>
            <p>[공모자격] 안양대학교 학부생이라면 누구나</p>
            <p>[공모주제] - 대학생활 학과, 동아리, 학교행사(축제 등) 일상과 캠퍼스라이프 사진</p>
            <p> - 혁신과 창조, 세계와 함께하는 글로벌창의융합대학을 나타내는 의미와 이미지를 담은 사진</p>
            <p>[공모기간] 2025년 3월 17일(월) ~ 5월 16일(금) 오후 5시까지</p>
            <p>[제출서류] 신청서 및 디지털사진파일 *신청서는 안양대학교 홈페이지 공지사항 참조</p>
            <p>[제출규격]</p>
            <p> - JPG/JPEG/PNG 형식의 가로비율 사진</p>
            <p> - 작품당 3MB 이상, 해상도 2250x1500 이상</p>
            <p> - 촬영 기종 무관 (스마트폰, DSLR, 미러리스 등 모두 가능)</p>
            <p> - 작품 촬영 후 보정작업(포토샵, 합성 등)없이 원본사진 파일 제출</p>
            <p> * 명암, 밝기 조절 등 간단한 색감 보정만 가능</p>
            <p>[제출방법] 이메일을 통한 온라인 접수 (ayulove@anyang.ac.kr)</p>
            <p> * 사진파일명은 [학번_지원자성명_작품명]으로 제출</p>
            <p>[시상내역]</p>
            <table><tbody><tr><td valign="middle"><p>대 상</p></td><td valign="middle"><p>1명</p></td><td valign="middle"><p>총장상 및 장학금 500,000원</p></td></tr><tr><td valign="middle"><p>금 상</p></td><td valign="middle"><p>1명</p></td><td valign="middle"><p>총장상 및 장학금 400,000원</p></td></tr><tr><td valign="middle"><p>은 상</p></td><td valign="middle"><p>2명</p></td><td valign="middle"><p>총장상 및 장학금 각 300,000원</p></td></tr><tr><td valign="middle"><p>동 상</p></td><td valign="middle"><p>3명</p></td><td valign="middle"><p>총장상 및 장학금 각 200,000원</p></td></tr><tr><td valign="middle"><p>장려상</p></td><td valign="middle"><p>10명</p></td><td valign="middle"><p>총장상 및 장학금 각 100,000원</p></td></tr></tbody></table>
            <p>[수상 취소 및 제외대상] 출품작 형식 및 조건에 맞지않는 작품</p>
            <p>[심사 및 발표] 2025년 5월말 중</p>
            <p>[제출주의사항]</p>
            <p> - 출품수는 1인 기준 3점까지 가능</p>
            <p> - 사진에 인물이 나올 경우 반드시 초상권 활용에 대한 동의를 받아야 함</p>
            <p> - 출품 사진은 응모자가 1년 이내 촬용한 사진으로 타인의 권리를 침해하지 않아야 함.</p>
            <p> - 타인의 저작물 무단 도용에 대한 책임은 응모자에게 있음</p>
            <p> - 수상작품은 필요에 따라 수정, 변경되어 홍보물로 사용될 수 있음</p>
            <p> - 적격한 작품이 없을 경우, 대상 등을 선정하지 않을 수 있음.</p>
            <p> - 중복수상의 경우 수상은 가능하되, 상위상에 해당하는 장학금만 지급함</p>
            <p>[추가문의] 안양대학교 홍보실 ☎031-467-0951</p>
          </div>
        </div>`,
    };

    const updatedBody = addBaseUrlToImageSrc(noticeData.body);

    useEffect(() => {
        const images = document.querySelectorAll(".fr-view img");
        images.forEach((image) => {
            image.style.maxWidth = "100%"; // 최대 너비 100%로 설정
            image.style.height = "auto"; // 높이는 자동으로 조정
        });
    }, []);

    return (
        <div>
            <NoticeDetailHeader />
            <div className="noticeDetail-container">
                <div className="noticeDetail-title">{noticeData.title}</div>
                <hr className="title-footer" />
                <div className="notice-footer">
                    <span className="date">{noticeData.date}</span>
                    <span className="divider">|</span>
                    <span className="author">{noticeData.author}</span>
                </div>
                <hr className="body-top" />
                <div
                    className="noticeDetail-body"
                    dangerouslySetInnerHTML={{ __html: updatedBody }} // 수정된 HTML body 출력
                />
            </div>
        </div>
    );
};

export default NoticeDetail;
