import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Message } from 'semantic-ui-react';
import './index.css';

const InputItem = props => {
    const { item, itemList, setItem, setItemList } = props
    const [isShowAlert, setIsShowAlert] = useState(false)

    const actionInput = {
        color: 'blue',
        labelPosition: 'right',
        icon: 'add',
        content: 'Add',
        onClick: () => onClickAddButton()
    }

    const onShowHideAlert = () => {
        setIsShowAlert(false)
    }

    const onChangeInput = event => {
        setIsShowAlert(false)
        setItem(event.target.value)
    }

    const onClickAddButton = () => {
        let storeItem = [...itemList]
        let dataItem = {
            label: item,
            isChecked: false
        }
        if (!item) {
            setIsShowAlert(true)
        } else {
            storeItem.push(dataItem)
            setItemList(storeItem)
        }
    }

    const onSubmitItem = event => {
        event.preventDefault()
        setItem("")
    }

    return (
        <div>
            {isShowAlert ?
                <Message
                    icon="warning circle"
                    warning
                    size="tiny"
                    onDismiss={onShowHideAlert}
                    header="Please input your todo item!"
                />
                :
                <div />
            }
            <form onSubmit={onSubmitItem}>
                <Input
                    className='input-list'
                    placeholder="Please input your todo item here..."
                    value={item}
                    action={actionInput}
                    onChange={onChangeInput}
                />
            </form>
        </div>
    );
}

InputItem.propTypes = {
    item: PropTypes.string,
    itemList: PropTypes.array,
    setItem: PropTypes.any,
    setItemList: PropTypes.any
};

export default InputItem;