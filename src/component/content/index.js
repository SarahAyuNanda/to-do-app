import React, { useState } from 'react';
import InputItem from './input';
import CardItem from './card';
import './index.css';

const AppContent = () => {
    const [item, setItem] = useState('')
    const [itemList, setItemList] = useState([])

    return (
        <div className='app-content'>
            <InputItem item={item} itemList={itemList} setItem={setItem} setItemList={setItemList} />
            <CardItem itemList={itemList} setItemList={setItemList} />
        </div>
    );
};

export default AppContent;