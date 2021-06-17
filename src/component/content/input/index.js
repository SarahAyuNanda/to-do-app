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
        if (event.key === 'Enter') {
            onClickAddButton()
        }
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
        }
        setItemList(storeItem)
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
            <Input
                className='input-list'
                placeholder="Please input your todo item here!"
                action={actionInput}
                onKeyUp={onChangeInput}
            />
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