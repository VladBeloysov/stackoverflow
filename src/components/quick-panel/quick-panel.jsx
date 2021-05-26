import React from 'react';
import './quick-panel.scss';
import Question from "../question/question";

class QuickPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    showTable = (questionList, onSearchAuthor, onSearchTag, onAnswers) => {
        return questionList.map((item, index) => {
            return <Question onSearchAuthor={onSearchAuthor} onSearchTag={onSearchTag} onAnswers={onAnswers} title={item.title} key={ index } tags={item.tags} answerCount={item.answer_count} name={item.owner.display_name} authorID={item.owner.user_id} questionID={item.question_id}></Question>
        });
    }

    render() {
        const { questionList, onSearchAuthor, onSearchTag, onAnswers } = this.props;
        return (
            <div className="result">
                <h1>Экран результата поиска</h1>
                <table className="result__table">
                    <thead>
                    </thead>
                    <tbody>
                    {
                        (questionList) ? this.showTable(questionList, onSearchAuthor, onSearchTag, onAnswers) : 'загрузка'
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default QuickPanel;