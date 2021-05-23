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
            questionList: []
        }
    }

    componentWillMount() {
        this.props.question.then((data) => {
            console.log(data);
            this.setState({questionList: data.slice(0)});
            // data.map(item => {
            //     console.log(item.title);
            // });
        });
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
                <table className="result__table">
                    <thead>
                    </thead>
                    <tbody>
                        {
                            this.state.questionList.length > 0 ?
                                this.state.questionList.map((item, index) => {
                                    return <Question title={item.title} key={ index } tags={item.tags} answerCount={item.answer_count} name={item.owner.display_name}></Question>
                                }): null
                        }
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