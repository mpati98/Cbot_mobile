import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatbotReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: '',
            address: '',
            phone: '',
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { quantity, address, phone } = steps;

        this.setState({ quantity, address, phone });
    }

    render() {
        const { quantity, address, phone } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Đơn hàng của bạn</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>SL</td>
                            <td>: {quantity.value}</td>
                        </tr>
                        <tr>
                            <td>D/c</td>
                            <td>: {address.message}</td>
                        </tr>
                        <tr>
                            <td>Sdt</td>
                            <td>: {phone.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
ChatbotReview.propTypes = {
    steps: PropTypes.object,
};

ChatbotReview.defaultProps = {
    steps: undefined,
};

export {ChatbotReview}