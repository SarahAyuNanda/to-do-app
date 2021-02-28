import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import './index.css';

const InputItem = props => {
    const { item, itemList, setItem, setItemList } = props

    const actionInput = {
        color: 'blue',
        labelPosition: 'right',
        icon: 'add',
        content: 'Add',
        onClick: () => onClickAddButton()
    }

    const onChangeInput = (event, data) => {
        if (event.key === 'Enter') {
            onClickAddButton()
        }
        setItem(event.target.value)
    }

    const onClickAddButton = () => {
        let store = [...itemList]
        store.push(item)
        setItemList(store)
    }

    return (
        <Input
            className='input-list'
            action={actionInput}
            onKeyUp={onChangeInput}
        />
    );
}

InputItem.propTypes = {
    item: PropTypes.string,
    itemList: PropTypes.array,
    setItem: PropTypes.any,
    setItemList: PropTypes.any
};

export default InputItem;