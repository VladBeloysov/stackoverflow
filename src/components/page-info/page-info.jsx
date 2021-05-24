import React from 'react';
import './page-info.scss';
import Answer from "../answer/answer";
import {setAnswers, getQuestion} from "../../store/actions";
import {connect} from "react-redux";

class PageInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="info">
                <h1 className="info__title"></h1>
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

const mapStateToProps = (state) => {
    return { questionPromis: state.questionPromis };
};

const mapDispatchToProps = ({ getQuestion, setAnswers });

export default connect(mapStateToProps, mapDispatchToProps)(PageInfo);