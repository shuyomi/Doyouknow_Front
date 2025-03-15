import React from "react";
import "../../../styles/ContactInfo/ContactInfoDetail.css";

const Hyugesil = () => {
    return (
        <div className="휴게실">
            <h2 className="title01">휴게실</h2>
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
                            <td>교수휴게실</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>수리관교수휴게실</td>
                            <td>(수709)</td>
                            <td>
                                <a href="tel:0314670758">467-0758</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2">Fax: 467-0789</td>
                        </tr>
                        <tr>
                            <td>수봉관교수휴게실</td>
                            <td>(봉1019)</td>
                            <td>
                                <a href="tel:0314670798">467-0798</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2">Fax: 467-0909</td>
                        </tr>
                        <tr>
                            <td>아리비전교수휴게실</td>
                            <td>(비810)</td>
                            <td>
                                <a href="tel:0314631351">463-1351</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2">Fax: 463-1271</td>
                        </tr>
                        <tr>
                            <td>명예교수실</td>
                            <td>(대410)</td>
                            <td>
                                <a href="tel:0314670927">467-0927</a>
                            </td>
                        </tr>
                        <tr>
                            <td>교수휴게실(강화)</td>
                            <td>(이110)</td>
                            <td>
                                <a href="tel:0329306090">930-6090</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Hyugesil;
