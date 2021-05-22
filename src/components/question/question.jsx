import React from 'react';
import './question.scss';
import { INFO_PAGE_ROUTE } from "../../constants/routes";
import { Link } from "react-router-dom";

class Question extends React.Component {
    render() {
        return (
            <tr className="question">
                <td className="question__left">
                    <Link className="question__name" to={ INFO_PAGE_ROUTE }>Иван</Link>
                    <Link className="question__count" to={ INFO_PAGE_ROUTE }>5</Link>
                </td>
                <td className="question__right">
                    <Link className="question__title" to={ INFO_PAGE_ROUTE }>Верстка адаптивного сайта</Link>
                    <div className="question__tags">
                        <Link className="question__tag" to={ INFO_PAGE_ROUTE }>JS</Link>
                        <Link className="question__tag" to={ INFO_PAGE_ROUTE }>HTML</Link>
                        <Link className="question__tag" to={ INFO_PAGE_ROUTE }>CSS</Link>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Question;