import React from "react";
import "../../../styles/ContactInfo/ContactInfoDetail.css";

const Beobin = () => {
    return (
        <div className="법인사무처">
            <h2 className="title01">법인사무처</h2>
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
                            <td>이사장실</td>
                            <td>(봉702)</td>
                            <td>
                                <a href="tel:0314630703">463-0703</a>
                            </td>
                        </tr>
                        <tr>
                            <td>강화</td>
                            <td>(이309)</td>
                            <td>
                                <a href="tel:0329306100">930-6100</a>
                            </td>
                        </tr>
                        <tr>
                            <td>비서실</td>
                            <td>(봉702-1)</td>
                            <td>
                                <a href="tel:0314670705">467-0705</a>
                            </td>
                        </tr>
                        <tr>
                            <td>법인사무처</td>
                            <td>(봉711)</td>
                            <td>
                                <a href="tel:0314670711">
                                    (국장)
                                    <br />
                                    467-0711
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>(봉612)</td>
                            <td>
                                <a href="tel:0314670802">467-0802</a>
                                <br />
                                <a href="tel:0314670776">467-0776</a>
                                <br />
                                <a href="tel:0314670729">467-0729</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2">
                                Fax: 02-855-2010
                                <br />
                                <a href="tel:0314631390">463-1390</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Beobin;
