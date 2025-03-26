import React from 'react';
import './SignInForm.css';

export default function SignInForm() {
    return (
        <form className='SignInForm'>
            <input placeholder="아이디" />
            <input placeholder='비밀번호'/>
        </form>
    )
};