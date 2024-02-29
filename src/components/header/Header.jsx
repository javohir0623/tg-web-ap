import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'
import Button from "../button/Button";

const Header = () => {
    const {user, onClose} = useTelegram();
    return (
        <div className={Header}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
    