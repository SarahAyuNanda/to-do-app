import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import './index.css';

const AppContent = () => {
    const [item, setItem] = useState('')
    const [itemList, setItemList] = useState([])

    const actionInput = {
        color: 'blue',
        labelPosition: 'right',
        icon: 'add',
        content: 'Add',
        onClick: () => onClickAddButton()
    }

    const onChangeInput = (event, data) => {
        setItem(event.target.value)
    }

    const onClickAddButton = () => {
        let store = [...itemList]
        store.push(item)
        setItemList(store)
    }

    return (
        <div className='app-content'>
            <Input
                className='input-list'
                action={actionInput}
                onChange={onChangeInput}
            />
            {itemList.join(', ')}
        </div>
    );
};

export default AppContent;