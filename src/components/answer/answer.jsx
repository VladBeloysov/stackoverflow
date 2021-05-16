import React from 'react';
import './answer.scss';

class Answer extends React.Component {
    render() {
        return (
            <tr className="answer">
                <td className="answer__col">
                    <p>You can mock the Date.</p>
                    <p>If you use this approach, you can fully customize it to your needs.</p>
                </td>
            </tr>
        );
    }
}

export default Answer;