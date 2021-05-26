import React from 'react';
import './page-info.scss';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Question from "../question/question";
import Answer from "../answer/answer";

class PageInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    showTable(questionList) {
        return questionList.map((item, index) => {
            return <Answer text={item.body} authorName={item.owner.display_name} authorImg={item.owner.profile_image} ></Answer>
        })
    }

    render() {
        return (
            <div className="info">
                {
                    (this.props.answerList) ? (
                        <div>
                            <h1 className="info__title">{ this.props.questionTitle }</h1>
                            <div className="info__count">{ this.props.answerList.length } ответ.?.</div>
                            <table className="info__table">
                                {
                                    this.showTable(this.props.answerList)
                                }
                            </table>
                        </div>
                    ) : 'загрузка'
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { answerList: state.answerList, questionTitle: state.questionTitle };
};

const mapDispatchToProps = {  };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageInfo));