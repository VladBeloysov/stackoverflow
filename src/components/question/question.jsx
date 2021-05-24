import React from 'react';
import './question.scss';
import { INFO_PAGE_ROUTE } from "../../constants/routes";
import { Link } from "react-router-dom";
import {getQuestion, getQuestionAuthor, setAnswers} from "../../store/actions";
import {connect} from "react-redux";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionAuthorList: []
        }
    }

    // onSearchAuthor(authorID) {
    //     //console.log('authorID', authorID);
    //     // return function() {
    //     //     return this.props.getQuestionAuthor(authorID);
    //     // };
    //     return () => this.props.getQuestionAuthor(authorID);
    //
    // }

    render() {
        const { title, tags, answerCount, name, authorID } = this.props;
        return (
            <tr  className="question">
                <td className="question__left">
                    <div className="question__name" onClick={ ()=>this.props.onSearchAuthor(authorID) }>{ name }</div>
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

const mapStateToProps = (state) => {
    return {  };
};

const mapDispatchToProps = ({ getQuestionAuthor });
export default connect(mapStateToProps, mapDispatchToProps)(Question);