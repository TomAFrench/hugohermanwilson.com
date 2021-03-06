import React from 'react';
import Template from '../layouts/Template';
import Menu from '../components/Menu.js';
import Body from '../components/Body.js';

export default function Contact(props) {
    return (
        <div>
            <Template>
                <Menu />
                <Body className="white center-text">
                    <h1 className="title-font large-text">Contact</h1>
                    <p>Email the big dog baritone</p>
                </Body>
            </Template>
        </div>
    );
}
