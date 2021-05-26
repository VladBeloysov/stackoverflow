import React from 'react';
import './page-result.scss';
import Question from "../question/question";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getQuestionAuthor, getQuestionTag, getAnswers } from "../../store/actions";
import QuickPanel from "../quick-panel/quick-panel";

class PageResult extends React.Component {
    constructor(props) {
        super(props);
    }

    onSearchAuthor = (authorID) => {
        console.log('app onSearchAuthor', authorID);
        this.props.getQuestionAuthor(authorID);
    }

    onSearchTag = (tag) => {
        this.props.getQuestionTag(tag);
    }

    onAnswers = (questionID, title) => {
        console.log('onAnswers', questionID, title);
        this.props.getAnswers({ questionID, title });
    }

    showTable(questionList, onSearchAuthor, onSearchTag, onAnswers) {
        return questionList.map((item, index) => {
            return <Question onSearchAuthor={onSearchAuthor} onSearchTag={onSearchTag} onAnswers={onAnswers} title={item.title} key={ index } tags={item.tags} answerCount={item.answer_count} name={item.owner.display_name} authorID={item.owner.user_id} questionID={item.question_id}></Question>
        })
    }

    render() {
        return (
            <div className="container">
                <div className="main">
                    <div className="result">
                        <h1>Экран результата поиска</h1>
                        <table className="result__table">
                            <thead>
                            </thead>
                            <tbody>
                            {
                                (this.props.questionList) ? this.showTable(this.props.questionList, this.onSearchAuthor, this.onSearchTag, this.onAnswers) : 'загрузка'
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="sidebar">
                    <h3>Панель быстрого отображения</h3>
                    { this.props.questionAuthorList ? <QuickPanel questionList={ this.props.questionAuthorList } onSearchAuthor={this.onSearchAuthor} onSearchTag={this.onSearchTag} onAnswers={this.onAnswers} ></QuickPanel> : null }
                    { this.props.questionTagList ? <QuickPanel questionList={ this.props.questionTagList } onSearchAuthor={this.onSearchAuthor} onSearchTag={this.onSearchTag} onAnswers={this.onAnswers} ></QuickPanel> : null }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { questionList: state.questionList, questionAuthorList: state.questionAuthorList, questionTagList: state.questionTagList };
};

const mapDispatchToProps = { getQuestionTag, getAnswers, getQuestionAuthor };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageResult));