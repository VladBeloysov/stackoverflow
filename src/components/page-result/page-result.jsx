import React from 'react';
import './page-result.scss';
import Question from "../question/question";
import { connect } from 'react-redux';
import { setAnswers, setSearch} from '../../store/actions/index';
import { bindActionCreators } from 'redux';
import SearchModel from '../../model/searchModel';

class PageResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBody: []
        }
    }

    componentWillMount() {
        // return SearchModel.cacheSearchResults()
        // let questionBody = SearchModel.cacheSearchResults().filter((item) => {
        //     return item = item.question_id == this.props.questionID;
        // });
        //
        // this.setState({questionBody});
    }

    render() {
        return (
            <div className="result">
                <h1>Экран результата поиска</h1>
                <p>{ this.state.question }</p>
                <table className="result__table">
                    <thead>
                    </thead>
                    <tbody>
                        <Question></Question>
                        <Question></Question>
                        <Question></Question>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { question: state.question, answer: state.answer, rew: state.rew};
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setSearch, setAnswers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageResult);