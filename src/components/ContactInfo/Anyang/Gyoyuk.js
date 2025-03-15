import React from "react";
import "../../../styles/ContactInfo/ContactInfoDetail.css";

const Gyoyuk = () => {
    return (
        <div className="교육혁신원">
            <h2 className="title01">교육혁신원</h2>
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
                            <td>교육혁신원장실</td>
                            <td>(아406)</td>
                            <td>
                                <a href="tel:0314670902">467-0902</a>
                            </td>
                        </tr>
                        <tr>
                            <td>교육품질관리센터장</td>
                            <td>(아406)</td>
                            <td>
                                <a href="tel:0314670902">467-0902</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>교육품질관리</td>
                            <td>
                                <a href="tel:0314670905">467-0905</a>
                            </td>
                        </tr>
                        <tr>
                            <td>교육역량강화센터장</td>
                            <td>(아406-4)</td>
                            <td>
                                <a href="tel:0314670930">467-0930</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>교수지원</td>
                            <td>
                                <a href="tel:0314670939">467-0939</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>학습지원</td>
                            <td>
                                <a href="tel:0314670926">467-0926</a>
                                <br />
                                <a href="tel:0314631365">463-1365</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>상담실</td>
                            <td>
                                <a href="tel:0314670912">467-0912</a>
                            </td>
                        </tr>
                        <tr>
                            <td>아리비교과센터장</td>
                            <td>(아406-5)</td>
                            <td>
                                <a href="tel:0314631255">463-1255</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>아리비교과</td>
                            <td>
                                <a href="tel:0314631279">463-1279</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <a href="tel:0314631256">463-1256</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2">Fax: 467-0900</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Gyoyuk;
