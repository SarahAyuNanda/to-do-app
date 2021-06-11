import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Checkbox, Icon } from 'semantic-ui-react';
import './index.css';

const CardItem = props => {
    const { itemList, setItemList } = props
    const { itemCheck, setItemCheck } = useState(false)

    const onCheckButton = event => {

    }

    const onClickEditButton = (event, data) => {
        console.log(data);
    }

    const onClickDeleteButton = (event, data) => {
        let store = [...itemList]
        store.splice(data, 1)
        setItemList(store)
    }

    return (
        <Card.Group itemsPerRow={3}>
            {itemList.map((item, index) => {
                return (
                    <Card>
                        <Card.Content>
                            <Card.Description>
                                <Checkbox
                                    className="check-list"
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </Card.Description>
                            <Card.Description className="item-list">{item}</Card.Description>
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