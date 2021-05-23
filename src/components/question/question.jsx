import React from 'react';
import './question.scss';
import { INFO_PAGE_ROUTE } from "../../constants/routes";
import { Link } from "react-router-dom";

class Question extends React.Component {

    render() {
        const { title, tags, answerCount, name } = this.props;
        return (
            <tr  className="question">
                <td className="question__left">
                    <Link className="question__name" to={ INFO_PAGE_ROUTE }>{ name }</Link>
                    <Link className="question__count" to={ INFO_PAGE_ROUTE }>{ answerCount }</Link>
                </td>
                <td className="question__right">
                    <Link className="question__title" to={ INFO_PAGE_ROUTE }>{ title }</Link>
                    <div className="question__tags">
                        {
                            tags.map((item, index) => {
                                return <Link className="question__tag" key={index} to={ INFO_PAGE_ROUTE }>{ item }</Link>
                            })
                        }
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