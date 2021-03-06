import React from 'react';
import css from './Menu.module.css';
import 'fomantic-ui-css/components/icon.min.css';
import { Icon } from 'semantic-ui-react';
import MobileMenu from './MobileMenu';

export default class Menu extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    toggleMenuOpen = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    getCorrectHeaderTag = () => {
        if (this.props.path === '/'){
            return (
                <h1 className={`black-background ${css.mainHeader}`}>
                    Hugo Herman-Wilson
                </h1>
            );
        } else {
            return (
                <h2 className={`black-background ${css.mainHeader}`}>
                    Hugo Herman-Wilson
                </h2>
            );
        }
    }

    render() {

        return (
            <div
                id="Menu"
                className={`title-font ${css.container} ${
                    css[this.props.visiblity]
                }`}
            >
                {this.getCorrectHeaderTag()}
                <h2
                    className={`black-background ${css.oneLine} ${css.subHeader}`}
                >
                    Baritone
                </h2>
                <h2
                    className={`${css.oneLine} ${css.subHeader} ${css.alignRight} ${css.pink}`}
                >
                    <Icon
                        name="bars"
                        className="pink black-background"
                        onClick={this.toggleMenuOpen}
                    />
                </h2>
                <MobileMenu
                    toggleMenu={this.toggleMenuOpen}
                    visible={this.state.menuOpen}
                />
            </div>
        );
    }
}
