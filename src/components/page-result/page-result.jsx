import React from 'react';
import './page-result.scss';
import Question from "../question/question";

class PageResult extends React.Component {
    constructor(props) {
        super(props);
    }

    showTable(questionList, onSearchAuthor, onSearchTag) {
        return questionList.map((item, index) => {
            return <Question onSearchAuthor={onSearchAuthor} onSearchTag={onSearchTag} title={item.title} key={ index } tags={item.tags} answerCount={item.answer_count} name={item.owner.display_name} authorID={item.owner.user_id}></Question>
        })
    }

    render() {
        const { questionList, onSearchAuthor, onSearchTag } = this.props;
        console.log('questionList', questionList);
        return (
            <div className="result">
                <h1>Экран результата поиска</h1>
                <table className="result__table">
                    <thead>
                    </thead>
                    <tbody>
                    {
                        (questionList) ? this.showTable(questionList, onSearchAuthor, onSearchTag) : 'загрузка'
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PageResult;