import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Checkbox, Divider, Icon } from 'semantic-ui-react';
import './index.css';

const CardItem = props => {
    const { itemList, setItemList } = props

    const [isCheckedList, setIsCheckedList] = useState(false)
    const [checkedList, setCheckedList] = useState([])
    const [uncheckedList, SetUncheckedList] = useState([])

    const onChangeStrikeThrough = value => {
        return value ? "line-through" : "none"
    }

    const onCheckButton = (index, data) => {
        console.log("checked index value", index)
        console.log("checked data value", data)
        const filterCheckedItem = itemList.map((item, i) => {
            if (i === index) {
                item.isChecked = !item.isChecked;
            }
            return item;
        });
        setItemList(filterCheckedItem);
    }

    const onClickEditButton = (event, data) => {
        console.log(data);
    }

    const onClickDeleteButton = (event, index) => {
        let storeItem = [...itemList]
        storeItem.splice(index, 1)
        setItemList(storeItem)
    }

    return (
        <div>
            <Card.Group itemsPerRow={3}>
                {itemList.map((item, index) => {
                    const { label, isChecked } = item
                    return (
                        <Card key={index}>
                            <Card.Content>
                                <Card.Description>
                                    <Checkbox
                                        id={index}
                                        className="check-list"
                                        color="primary"
                                        checked={isChecked}
                                        onClick={() => onCheckButton(index, item)}
                                    />
                                </Card.Description>
                                <Card.Description className="item-list" style={{ "textDecoration": onChangeStrikeThrough(isChecked, index) }}>{label}</Card.Description>
                                <Card.Description className='action-list'>
                                    <Button color='yellow' onClick={event => onClickEditButton(event, index)}>
                                        <Button.Content>
                                            <Icon name='edit' />
                                        </Button.Content>
                                    </Button>
                                    <Button color='red' onClick={event => onClickDeleteButton(event, index)}>
                                        <Button.Content>
                                            <Icon name='trash' />
                                        </Button.Content>
                                    </Button>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
            {isCheckedList ?
                <Divider />
                :
                <div />
            }
        </div>
    );
};

CardItem.propTypes = {
    itemList: PropTypes.array,
    setItemList: PropTypes.any,
};

export default CardItem;