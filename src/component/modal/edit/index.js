import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Modal } from 'semantic-ui-react'

const ModalEdit = props => {
    const {
        itemEditValue,
        isEdit,
        onCloseEdit,
        onSaveEdit,
        onChangeInputEdit
    } = props
    return (
        <Modal
            size="tiny"
            open={isEdit}
            onClose={onCloseEdit}
        >
            <Modal.Header>Edit Your ToDo</Modal.Header>
            <Modal.Content>
                <Input 
                    transparent
                    value={itemEditValue}
                    onChange={onChangeInputEdit}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={onCloseEdit}>
                    Cancel
                </Button>
                <Button positive onClick={onSaveEdit}>
                    Save
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

ModalEdit.propTypes = {
    itemEditValue: PropTypes.string,
    isEdit: PropTypes.bool,
    onCloseEdit: PropTypes.func,
    onSaveEdit: PropTypes.func,
    onChangeInputEdit: PropTypes.func
};

export default ModalEdit;