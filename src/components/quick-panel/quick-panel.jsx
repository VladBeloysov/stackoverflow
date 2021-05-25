import React from 'react';
import './quick-panel.scss';
import Question from "../question/question";

class QuickPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    showTable = (questionList) => {
        return questionList.map((item, index) => {
            return <Question title={item.title} key={ index } tags={item.tags} answerCount={item.answer_count} name={item.owner.display_name}></Question>
        });
    }

    render() {
        const { questionList } = this.props;
        return (
            <div className="result">
                <h1>Экран результата поиска</h1>
                <table className="result__table">
                    <thead>
                    </thead>
                    <tbody>
                    {
                        (questionList) ? this.showTable(questionList) : 'загрузка'
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default QuickPanel;