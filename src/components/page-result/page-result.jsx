import React from 'react';
import './page-result.scss';
import Question from "../question/question";

class PageResult extends React.Component {
    render() {
        return (
            <div className="result">
                <h1>Экран результата поиска</h1>
                <table className="result__table">
                    <Question></Question>
                    <Question></Question>
                    <Question></Question>
                </table>
            </div>
        );
    }
}

export default PageResult;