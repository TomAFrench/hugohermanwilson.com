import React from 'react';
import Template from '../layouts/index';
import Menu from '../components/menu.js';
import Body from '../components/Body.js';

export default function Listen(props) {
    return (
        <div>
            <Template>
                <Menu />
                <Body className="white center-text">
                    <h1 className="title-font large-text">Listen</h1>
                    <p>Listen to the big dog baritone</p>
                </Body>
            </Template>
        </div>
    );
}
