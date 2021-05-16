import React from 'react';
import './question.scss';
import { INFO_PAGE_ROUTE } from "../../constants/routes";
import { Link } from "react-router-dom";

class Question extends React.Component {
    render() {
        return (
            <tr className="question">
                <td className="question__left">
                    <Link className="question__name">Иван</Link>
                    <Link className="question__count" to={ INFO_PAGE_ROUTE }>5</Link>
                </td>
                <td className="question__right">
                    <Link className="question__title" to={ INFO_PAGE_ROUTE }>Верстка адаптивного сайта</Link>
                    <div className="question__tags">
                        <Link className="question__tag">JS</Link>
                        <Link className="question__tag">HTML</Link>
                        <Link className="question__tag">CSS</Link>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Question;