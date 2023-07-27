import React, { useState } from 'react';
import Assign from './Assign';
import Createuser from './Createuser';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

function Conditional() {
    const [showAssign, setShowAssign] = useState(false);
    const [showCreateUser, setShowCreateUser] = useState(false);

    const handleAddButtonClick = () => {
        setShowAssign(false);
        setShowCreateUser(true);
    };

    const handleCreateUserSubmit = () => {
        setShowCreateUser(false);
        setShowAssign(true);
    };

    return (
        <div>
            {showCreateUser && (
                <Createuser
                    onSubmit={handleCreateUserSubmit}
                // Pass any necessary props to the Createuser component
                />
            )}

            {showAssign && (
                <Assign
                // Pass any necessary props to the Assign component
                />
            )}

            {!showCreateUser && !showAssign && (
                <IconButton
                    icon={<AddIcon />}
                    size="lg"
                    color="primary"
                    position="fixed"
                    bottom={20}
                    right={20}
                    onClick={handleAddButtonClick}
                />
            )}
        </div>
    );
}

export default Conditional;
