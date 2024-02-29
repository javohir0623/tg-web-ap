import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const {tg} = useTelegram();
    useEffect(() => {
        tg.MainButton.setParams({
            text:'Xonadon haqida ma\'lumot olish'
        })
    }, [])
    useEffect(() => {
        if (!name || !phone){
            tg.MainButton.hide();
        }else {
            tg.MainButton.show();
        }
    }, [name, phone])
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangePhone = (e) => {
        setName(e.target.value)
    }
    return (
        <div className={"form"}>
            <input className={'input'} type="text" placeholder={'Ism'} value={name} onChange={onChangeName}/>
            <input className={'input'} type="text" placeholder={'Telefon'} value={phone} onChange={onChangePhone}/>
        </div>
    );
};

export default Form;