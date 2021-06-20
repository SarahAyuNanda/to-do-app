import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Checkbox, Divider, Icon } from 'semantic-ui-react';
import './index.css';

const CardItem = props => {
    const {
        itemList,
        itemCheckedList,
        onClickEditButton,
        onClickDeleteButton,
        onCheckButton
    } = props

    const onChangeStrikeThrough = value => {
        return value ? "line-through" : "none"
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
                                        onClick={() => onCheckButton(index)}
                                    />
                                </Card.Description>
                                <Card.Description className="item-list" style={{ "textDecoration": onChangeStrikeThrough(isChecked, index) }}>{label}</Card.Description>
                                <Card.Description className='action-list'>
                                    <Button color='yellow' onClick={() => onClickEditButton(index)}>
                                        <Button.Content>
                                            <Icon name='edit' />
                                        </Button.Content>
                                    </Button>
                                    <Button color='red' onClick={() => onClickDeleteButton(index)}>
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
            {itemCheckedList.length ?
                <div>
                    <Divider />
                    <Card.Group itemsPerRow={3}>
                        {itemCheckedList.map((item, index) => {
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
                                                onClick={() => onCheckButton(index)}
                                            />
                                        </Card.Description>
                                        <Card.Description className="item-list" style={{ "textDecoration": onChangeStrikeThrough(isChecked, index) }}>{label}</Card.Description>
                                        <Card.Description className='action-list'>
                                            <Button color='yellow' onClick={() => onClickEditButton(index)}>
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
                </div>
                :
                <div />
            }
        </div>
    );
};

CardItem.propTypes = {
    itemList: PropTypes.array,
    itemCheckedList: PropTypes.array,
    onClickEditButton: PropTypes.func,
    onClickDeleteButton: PropTypes.func,
    onCheckButton: PropTypes.func
};

export default CardItem;