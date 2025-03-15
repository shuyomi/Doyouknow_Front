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
                            <td>(이111)</td>
                            <td></td>
                            <td>
                                <a href="tel:0329306230">930-6230</a>
                            </td>
                            <td rowspan="9">930-6215</td>
                        </tr>
                        <tr>
                            <td rowspan="6">행정실</td>
                            <td rowspan="6">(이102)</td>
                            <td>업무총괄</td>
                            <td>
                                <a href="tel:0329306000">930-6000</a>
                            </td>
                        </tr>
                        <tr>
                            <td>학생지원</td>
                            <td>
                                <a href="tel:0329306210">930-6210</a>
                            </td>
                        </tr>
                        <tr>
                            <td>학사지원</td>
                            <td>
                                <a href="tel:0329306211">930-6211~4</a>
                            </td>
                        </tr>
                        <tr>
                            <td>시설총괄</td>
                            <td>
                                <a href="tel:0329306221">930-6221</a>
                            </td>
                        </tr>
                        <tr>
                            <td>전기</td>
                            <td>
                                <a href="tel:0329306222">930-6222</a>
                            </td>
                        </tr>
                        <tr>
                            <td>설비</td>
                            <td>
                                <a href="tel:0329306223">930-6223</a>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">도서관</td>
                            <td rowspan="2">(이523)</td>
                            <td>업무총괄</td>
                            <td>
                                <a href="tel:0329306250">930-6250</a>
                            </td>
                        </tr>
                        <tr>
                            <td>개가자료실</td>
                            <td>
                                <a href="tel:0329306253">930-6253</a>
                            </td>
                        </tr>
                        <tr>
                            <td>교수휴게실</td>
                            <td>(이110)</td>
                            <td></td>
                            <td>
                                <a href="tel:0329306090">930-6090</a>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>매점</td>
                            <td>(이103)</td>
                            <td></td>
                            <td>
                                <a href="tel:0329306242">930-6242</a>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>복사실</td>
                            <td>(이108)</td>
                            <td></td>
                            <td>
                                <a href="tel:0329306243">930-6243</a>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>정문</td>
                            <td></td>
                            <td></td>
                            <td>
                                <a href="tel:0329306231">930-6231</a>
                                <br />
                                <a href="tel:0329306232">930-6232</a>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>이공인문학관 경비실</td>
                            <td>(이109)</td>
                            <td></td>
                            <td>
                                <a href="tel:0329306233">930-6233</a>
                                <br />
                                <a href="tel:0329306234">930-6234</a>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Ganghwa;
