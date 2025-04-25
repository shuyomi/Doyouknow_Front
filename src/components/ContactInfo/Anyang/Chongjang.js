import React from "react";
import "../../../styles/ContactInfo/ContactInfoDetail.css";

const Chongjang = () => {
    return (
        <div className="총장실">
            <h2 className="title01">총장실</h2>
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
                            <td>총장실</td>
                            <td>(도516)</td>
                            <td>
                                <a href="tel:0314670701">467-0701</a>
                                <br />
                                <a href="tel:0314670775">467-0775</a>
                            </td>
                        </tr>
                        <tr>
                            <td>비서실</td>
                            <td>(도517)</td>
                            <td>
                                <a href="tel:0314670713">467-0713</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <a href="tel:0314670712">467-0712</a>
                                <br />
                                <a href="tel:0314670706">467-0706</a>
                            </td>
                        </tr>
                        <tr>
                            <td>교학부총장실</td>
                            <td>(도509)</td>
                            <td>
                                <a href="tel:0314670702">467-0702</a>
                            </td>
                        </tr>
                        <tr>
                            <td>비서실</td>
                            <td></td>
                            <td>
                                <a href="tel:0314670779">467-0779</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2">Fax: 467-0778</td>
                        </tr>
                        <tr>
                            <td>대외협력부총장실</td>
                            <td>(도516)</td>
                            <td>
                                <a href="tel:0314670710">467-0710</a>
                            </td>
                        </tr>
                        <tr>
                            <td>비서실</td>
                            <td></td>
                            <td>
                                <a href="tel:0314670710">467-0710</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Chongjang;
