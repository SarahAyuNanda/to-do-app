import React from 'react';
import { Header } from 'semantic-ui-react';
import './index.css'

const AppHeader = () => {
    return (
        <Header as='h1' icon textAlign='center'>
            <Header.Content>
                TODO APP
                <Header.Subheader>
                    Create Your To Do List Here
                </Header.Subheader>
            </Header.Content>
        </Header>
    );
};

export default AppHeader;