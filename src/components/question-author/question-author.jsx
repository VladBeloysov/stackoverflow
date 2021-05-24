import React from 'react';
import './question-author.scss';
import Question from "../question/question";
import { connect } from 'react-redux';
import { getQuestionAuthor } from '../../store/actions/index';

class QuestionAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: [],
            //authorOld: null
        }
    }

    componentWillMount() {
        this.updateData();
    }

    updateData = () => {
        this.props.questionAuthorPromis.then(result => {
            this.setState({questionList: result.slice(0)});
        })
    }

    showData = () => {
        //console.log((this.props.authorID !== this.state.authorOld) && this.state.questionList.length > 0);
        //if ((this.props.authorID !== this.state.authorOld) && this.state.questionList.length > 0) {
            //this.setState({authorOld: this.props.authorID});
            return this.state.questionList.map((item, index) => {
                return <Question title={item.title} key={ index } tags={item.tags} answerCount={item.answer_count} name={item.owner.display_name}></Question>
            });

       // }
    }

    render() {
        return (
            <div className="result">
                <h1>Экран результата поиска</h1>
                <table className="result__table">
                    <thead>
                    {
                        this.props.authorID
                    }
                    </thead>
                    <tbody>
                    {
                        this.showData()
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