import React from "react";
import "../../../styles/ContactInfo/ContactInfoDetail.css";

const Yebigun = () => {
    return (
        <div className="예비군대대">
            <h2 className="title01">예비군대대</h2>
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
                            <td>예비군대대</td>
                            <td>(봉402)</td>
                            <td>
                                <a href="tel:0314631368">463-1368</a>
                                <br />
                                <a href="tel:0314670772">467-0772</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2">Fax: 463-1369</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Yebigun;
