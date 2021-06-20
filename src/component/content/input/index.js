import React from 'react';
import PropTypes from 'prop-types';
import { Input, Message } from 'semantic-ui-react';
import './index.css';

const InputItem = props => {
    const { 
        itemInput, 
        isShowMessage, 
        onChangeInput, 
        onClickAddButton, 
        onShowHideMessage 
    } = props

    const actionInput = {
        color: 'blue',
        labelPosition: 'right',
        icon: 'add',
        content: 'Add',
        onClick: onClickAddButton
    }

    const onSubmitItem = event => {
        event.preventDefault()
    }

    return (
        <div>
            {isShowMessage ?
                <Message
                    icon="warning circle"
                    warning
                    size="tiny"
                    onDismiss={onShowHideMessage}
                    header="Please input your todo item!"
                />
                :
                <div />
            }
            <form onSubmit={onSubmitItem}>
                <Input
                    className='input-list'
                    placeholder="Please input your todo item here..."
                    value={itemInput}
                    action={actionInput}
                    onChange={onChangeInput}
                />
            </form>
        </div>
    );
}

InputItem.propTypes = {
    itemInput: PropTypes.string,
    isShowMessage: PropTypes.bool,
    onChangeInput: PropTypes.func,
    onClickAddButton: PropTypes.func,
    onShowHideMessage: PropTypes.func
};

export default InputItem;