import React from 'react';
import './page-result.scss';
import Question from "../question/question";

class PageResult extends React.Component {
    constructor(props) {
        super(props);
    }

    showTable(questionList, onSearchAuthor) {
        return questionList.map((item, index) => {
            return <Question onSearchAuthor={onSearchAuthor} title={item.title} key={ index } tags={item.tags} answerCount={item.answer_count} name={item.owner.display_name} authorID={item.owner.user_id}></Question>
        })
    }

    render() {
        const { questionList, onSearchAuthor } = this.props;
        console.log('questionList', questionList);
        return (
            <div className="result">
                <h1>Экран результата поиска</h1>
                <table className="result__table">
                    <thead>
                    </thead>
                    <tbody>
                    {
                        (questionList) ? this.showTable(questionList, onSearchAuthor) : 'загрузка'
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PageResult;