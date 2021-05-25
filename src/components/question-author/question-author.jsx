import React from 'react';
import './question-author.scss';
import Question from "../question/question";
import { connect } from 'react-redux';
import { getQuestionAuthor } from '../../store/actions/index';

class QuestionAuthor extends React.Component {
    constructor(props) {
        super(props);
    }

    showTable = (questionAuthorList) => {
        return questionAuthorList.map((item, index) => {
            return <Question title={item.title} key={ index } tags={item.tags} answerCount={item.answer_count} name={item.owner.display_name}></Question>
        });
    }

    render() {
        const { questionAuthorList } = this.props;
        return (
            <div className="result">
                <h1>Экран результата поиска</h1>
                <table className="result__table">
                    <thead>
                    </thead>
                    <tbody>
                    {
                        (questionAuthorList) ? this.showTable(questionAuthorList) : 'загрузка'
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default QuestionAuthor;