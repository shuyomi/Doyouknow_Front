import React from "react";
import "../../../styles/ContactInfo/ContactInfoDetail.css";

const Ganghwa = () => {
    return (
        <div className="강화캠퍼스">
            <h2 className="title01">강화캠퍼스</h2>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>부서명</th>
                            <th>위치</th>
                            <th>업무/직책</th>
                            <th>전화번호</th>
                            <th>FAX</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>실장실</td>
                            <td>이 111</td>
                            <td></td>
                            <td>930-6230</td>
                            <td rowspan="9">930-6215</td>
                        </tr>
                        <tr>
                            <td rowspan="6">행정실</td>
                            <td rowspan="6">이 102</td>
                            <td>업무총괄</td>
                            <td>930-6000</td>
                        </tr>
                        <tr>
                            <td>학생지원</td>
                            <td>930-6210</td>
                        </tr>
                        <tr>
                            <td>학사지원</td>
                            <td>930-6211~4</td>
                        </tr>
                        <tr>
                            <td>시설총괄</td>
                            <td>930-6221</td>
                        </tr>
                        <tr>
                            <td>전기</td>
                            <td>930-6222</td>
                        </tr>
                        <tr>
                            <td>설비</td>
                            <td>930-6223</td>
                        </tr>
                        <tr>
                            <td rowspan="2">도서관</td>
                            <td rowspan="2">이 523</td>
                            <td>업무총괄</td>
                            <td>930-6250</td>
                        </tr>
                        <tr>
                            <td>개가자료실</td>
                            <td>930-6253</td>
                        </tr>
                        <tr>
                            <td>교수휴게실</td>
                            <td>이 110</td>
                            <td></td>
                            <td>930-6090</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>매점</td>
                            <td>이 103</td>
                            <td></td>
                            <td>930-6242</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>복사실</td>
                            <td>이 108</td>
                            <td></td>
                            <td>930-6243</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>정문</td>
                            <td></td>
                            <td></td>
                            <td>930-6231,2</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>이공인문학관 경비실</td>
                            <td>이 109</td>
                            <td></td>
                            <td>930-6233,4</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Ganghwa;
