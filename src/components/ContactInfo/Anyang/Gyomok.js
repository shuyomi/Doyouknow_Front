import React from "react";
import "../../../styles/ContactInfo/ContactInfoDetail.css";

const Gyomok = () => {
    return (
        <div className="교목실">
            <h2 className="title01">교목실</h2>
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
                            <td>교목실장실</td>
                            <td>(봉1412)</td>
                            <td>
                                <a href="tel:0314670761">467-0761</a>
                            </td>
                        </tr>
                        <tr>
                            <td>교목실</td>
                            <td></td>
                            <td>
                                <a href="tel:0314670715">467-0715</a>
                                <br />
                                <a href="tel:0314670716">467-0716</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2">Fax: 463-1315</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Gyomok;
