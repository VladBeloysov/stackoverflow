import React from 'react';
import './question.scss';
import {INFO_PAGE_ROUTE, RESULT_PAGE_ROUTE} from "../../constants/routes";
import { Link } from "react-router-dom";

class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, tags, answerCount, name, authorID, onSearchAuthor, onSearchTag } = this.props;
        return (
            <tr  className="question">
                <td className="question__left">
                    <Link className="question__name" to={ RESULT_PAGE_ROUTE } onClick={ ()=>onSearchAuthor(authorID) }>{ name }</Link>
                    <Link className="question__count" to={ INFO_PAGE_ROUTE }>{ answerCount }</Link>
                </td>
                <td className="question__right">
                    <Link className="question__title" to={ INFO_PAGE_ROUTE }>{ title }</Link>
                    <div className="question__tags">
                        {
                            tags.map((item, index) => {
                                return <Link className="question__tag" onClick={ ()=>onSearchTag(item) } key={index} to={ RESULT_PAGE_ROUTE }>{ item }</Link>
                            })
                        }
                    </div>
                </td>
            </tr>
        );
    }
}

export default Question;