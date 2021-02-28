import React, { useState } from 'react';
import { Button, Card, Icon, Input } from 'semantic-ui-react';
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
        <div className='app-content'>
            <Input
                className='input-list'
                action={actionInput}
                onKeyUp={onChangeInput}
            />
            <Card.Group itemsPerRow={2}>
                {itemList.map((item, index) => {
                    return (
                        <Card>
                            <Card.Content>
                                <Card.Description>{item}</Card.Description>
                                <Card.Description className='action-list'>
                                    <Button  color='yellow'>
                                        <Button.Content>
                                            <Icon name='edit' />
                                        </Button.Content>
                                    </Button>
                                    <Button color='red' >
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
    );
};

export default AppContent;