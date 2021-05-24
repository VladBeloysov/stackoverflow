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
        this.props.questionPromis.then(result => {
            this.setState({questionList: result.slice(0)});
        })
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
                            //console.log(this.state.questionList)
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
    return { questionPromis: state.questionPromis, answer: state.answer, rew: state.rew};
};

const mapDispatchToProps = ({ setSearch, setAnswers });
export default connect(mapStateToProps, mapDispatchToProps)(PageResult);