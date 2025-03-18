import React from "react";
import "../../../styles/ContactInfo/ContactInfoDetail.css";

const Mirae = () => {
    return (
        <div className="미래전략실 및 홍보실">
            <h2 className="title01">미래전략실∙홍보실</h2>
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
                            <td>미래전략실장</td>
                            <td>(도514)</td>
                            <td>
                                <a href="tel:0314670950">
                                    (실장)
                                    <br />
                                    467-0950
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>대외협력홍보</td>
                            <td>
                                <a href="tel:0314670951">467-0951</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>미래전략</td>
                            <td>
                                <a href="tel:0314670958">467-0958</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2">Fax: 467-0957</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mirae;
