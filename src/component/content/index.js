import React, { useEffect, useState } from 'react';
import InputItem from './input';
import CardItem from './card';
import ModalEdit from '../modal/edit';
import './index.css';

const AppContent = () => {
    const [itemInput, setItemInput] = useState('')
    const [itemList, setItemList] = useState([])
    const [itemCheckedList, setItemCheckedList] = useState([])
    const [isShowMessage, setIsShowMessage] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [itemEditIndex, setItemEditIndex] = useState(0)
    const [itemEditValue, setItemEditValue] = useState('')

    useEffect(() => {
        console.log("itemList : ", itemList);
    }, [itemList])

    const onChangeInput = event => {
        setIsShowMessage(false)
        setItemInput(event.target.value)
    }

    const onClickAddButton = () => {
        let storeItemList = [...itemList]
        let dataItemObj = {
            label: itemInput,
            isChecked: false
        }
        if (!itemInput) {
            setIsShowMessage(true)
        } else {
            storeItemList.push(dataItemObj)
            setItemList(storeItemList)
            setItemInput("")
        }
    }

    const onClickEditButton = index => {
        setItemEditIndex(index)
        setItemEditValue(itemList[index].label)
        setIsEdit(true)
        console.log("onClickEditButton for value edit : ", itemList[index].label);
    }

    const onClickDeleteButton = index => {
        let storeItemList = [...itemList]
        storeItemList.splice(index, 1)
        setItemList(storeItemList)
    }

    const onCheckButton = index => {
        let filterItemList = itemList.map((item, i) => {
            if (i === index) {
                item.isChecked = !item.isChecked;
            }
            return item
        });
        setItemList(filterItemList);
    }

    const onShowHideMessage = () => {
        setIsShowMessage(false)
    }

    const onChangeInputEdit = event => {
        setItemEditValue(event.target.value)
    }

    const onSaveEdit = () => {
        let itemEditList = itemList.map((item, i) => {
            if (i === itemEditIndex) {
                item.label = itemEditValue
            }
            return item
        })
        setItemList(itemEditList)
        setIsEdit(false)
    }

    const onCloseEdit = () => {
        setIsEdit(false)
    }

    return (
        <div className='app-content'>
            <InputItem
                itemInput={itemInput}
                isShowMessage={isShowMessage}
                onChangeInput={onChangeInput}
                onClickAddButton={onClickAddButton}
                onShowHideMessage={onShowHideMessage}
            />
            <CardItem
                itemList={itemList}
                itemCheckedList={itemCheckedList}
                onClickEditButton={onClickEditButton}
                onClickDeleteButton={onClickDeleteButton}
                onCheckButton={onCheckButton}
            />
            <ModalEdit
                itemEditValue={itemEditValue}
                isEdit={isEdit}
                onCloseEdit={onCloseEdit}
                onSaveEdit={onSaveEdit}
                onChangeInputEdit={onChangeInputEdit}
            />
        </div>
    );
};

export default AppContent;