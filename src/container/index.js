import React from 'react';
import AppHeader from '../component/header';
import AppContent from '../component/content';
import './index.css'

const ToDoApp = () => {
    return (
        <div className='app-container'>
            <AppHeader />
            <AppContent />
        </div>
    );
};

export default ToDoApp;