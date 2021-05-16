import React from 'react';
import './page-info.scss';
import Answer from "../answer/answer";

class PageInfo extends React.Component {

    render() {
        return (
            <div className="info">
                <h1 className="info__title">Jest snapshot failing test on computer timestamp?</h1>
                <div className="info__count">3 ответа</div>
                <table className="info__table">
                    <Answer></Answer>
                    <Answer></Answer>
                    <Answer></Answer>
                    <Answer></Answer>
                    <Answer></Answer>
                </table>
            </div>
        );
    }
}

export default PageInfo;