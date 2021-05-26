import React from 'react';
import './answer.scss';

class Answer extends React.Component {
    render() {
        const { text, authorName, authorImg } = this.props;
        return (
            <tr className="answer">
                <td className="answer__col">
                    <img width="30px" height="30px" src={ authorImg }/>
                    <h3>{ authorName }</h3>
                </td>
                <td className="answer__col">

                    <div dangerouslySetInnerHTML={{__html: text }}></div>
                </td>
            </tr>
        );
    }
}

export default Answer;