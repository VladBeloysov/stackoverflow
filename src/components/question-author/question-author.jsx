import React from 'react';
import './question-author.scss';
import Question from "../question/question";
import { connect } from 'react-redux';
import { getQuestionAuthor } from '../../store/actions/index';

class QuestionAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: []
        }
    }

    // componentWillMount() {
    //     this.state.questionAuthorPromis ? this.props.questionAuthorPromis.then(result => {
    //         this.setState({questionList: result.slice(0)});
    //     }) : null;
    // }

    render() {
        return (
            <div className="result">
                <h1>Экран результата поиска</h1>
                <table className="result__table">
                    <thead>

                    </thead>
                    <tbody>
                    {
                        //this.state.questionList.length > 0 ? console.log(this.state.questionList) : null
                        //console.log(this.state.questionList)
                        // this.state.questionList.length > 0 ?
                        //     this.state.questionList.map((item, index) => {
                        //         return <Question title={item.title} key={ index } tags={item.tags} answerCount={item.answer_count} name={item.owner.display_name}></Question>
                        //     }): null
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { questionAuthorPromis: state.questionAuthorPromis };
};

const mapDispatchToProps = ({ getQuestionAuthor });
export default connect(mapStateToProps, mapDispatchToProps)(QuestionAuthor);