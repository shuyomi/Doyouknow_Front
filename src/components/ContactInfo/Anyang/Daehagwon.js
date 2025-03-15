import React from "react";
import "../../../styles/ContactInfo/ContactInfoDetail.css";

const Daehagwon = () => {
    return (
        <div className="대학원">
            <h2 className="title01">대학원</h2>
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
                            <td>일반대학원장실</td>
                            <td>(아709)</td>
                            <td>
                                <a href="tel:0314670986">467-0986</a>
                            </td>
                        </tr>
                        <tr>
                            <td>신학대학원장실</td>
                            <td>(아710)</td>
                            <td>
                                <a href="tel:0314670948">467-0948</a>
                            </td>
                        </tr>
                        <tr>
                            <td>교육대학원장실</td>
                            <td>(아711)</td>
                            <td>
                                <a href="tel:0314670764">467-0764</a>
                            </td>
                        </tr>
                        <tr>
                            <td>경영행정대학원장실</td>
                            <td>(아712)</td>
                            <td>
                                <a href="tel:0314670765">467-0765</a>
                            </td>
                        </tr>
                        <tr>
                            <td>교학과</td>
                            <td>(아707)</td>
                            <td>
                                <a href="tel:0314670770">467-0770</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>수업,성적</td>
                            <td>
                                <a href="tel:0314670853">467-0853</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>증명서,우편</td>
                            <td>
                                <a href="tel:0314670854">467-0854</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>학적,장학</td>
                            <td>
                                <a href="tel:0314670932">467-0932</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>논문</td>
                            <td>
                                <a href="tel:0314670933">467-0933</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>대학원유학생</td>
                            <td>
                                <a href="tel:0314670799">467-0799</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2">Fax: 467-0777</td>
                        </tr>
                        <tr>
                            <td>기후변화특성화대학원</td>
                            <td>(수217)</td>
                            <td>
                                <a href="tel:0314670901">467-0901</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2">Fax: 467-0904</td>
                        </tr>
                        <tr>
                            <td>교단파송실</td>
                            <td>(아708)</td>
                            <td>
                                <a href="tel:0314670759">467-0759</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Daehagwon;
