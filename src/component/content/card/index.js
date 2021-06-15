import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Checkbox, Icon } from 'semantic-ui-react';
import './index.css';

const CardItem = props => {
    const { itemList, setItemList } = props

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

    const onClickDeleteButton = (event, data) => {
        let storeItem = [...itemList]
        storeItem.splice(data, 1)
        setItemList(storeItem)
    }

    return (
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
                                    onClick={() => onCheckButton(index, item)}
                                />
                            </Card.Description>
                            {isChecked ?
                                <Card.Description className="item-list">done</Card.Description>
                                :
                                <Card.Description className="item-list">{label}</Card.Description>
                            }
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
    );
};

CardItem.propTypes = {
    itemList: PropTypes.array,
    setItemList: PropTypes.any,
};

export default CardItem;