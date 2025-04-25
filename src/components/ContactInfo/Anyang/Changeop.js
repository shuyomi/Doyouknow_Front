import React from "react";
import "../../../styles/ContactInfo/ContactInfoDetail.css";

const Changeop = () => {
    return (
        <div className="창업지원단">
            <h2 className="title01">창업지원단</h2>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>부서명</th>
                            <th>위치/업무</th>
                            <th>전화번호</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>인재역량개발센터</td>
                            <td>(아505)</td>
                            <td>
                                <a href="tel:0314631307">463-1307</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>(창302)</td>
                            <td>
                                <a href="tel:0314632063">
                                    (과장)
                                    <br />
                                    463-2063
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <a href="tel:0314632064">463-2064</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <a href="tel:0314632065">463-2065</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>취업</td>
                            <td>
                                <a href="tel:0314631308">463-1308</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>창업</td>
                            <td>
                                <a href="tel:0314631304">463-1304</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>민원</td>
                            <td>
                                <a href="tel:0314631327">463-1327</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>학생지도</td>
                            <td>
                                <a href="tel:0314631309">463-1309</a>
                            </td>
                        </tr>
                        <tr>
                            <td>취업지원관</td>
                            <td>(아504)</td>
                            <td>
                                <a href="tel:0314631295">463-1295</a>
                                <br />
                                <a href="tel:0314631296">463-1296</a>
                                <br />
                                <a href="tel:0314631244">463-1244</a>
                            </td>
                        </tr>
                        <tr>
                            <td>현장실습지원센터</td>
                            <td>(아505)</td>
                            <td>
                                <a href="tel:0314630703">463-1305</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Job Desk</td>
                            <td>(비605)</td>
                            <td>
                                <a href="tel:0314631277">463-1277</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Changeop;
