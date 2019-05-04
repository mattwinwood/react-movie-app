import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Navbar} from 'react-bootstrap';

class Navigation extends Component {
    static propTypes = {
        logo: PropTypes.string.isRequired,
        navItems: PropTypes.array
    };

    render() {
        return (
            <Navbar style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
                <Navbar.Brand href="#home">
                    <img
                        src={this.props.logo}
                        width="200"
                        alt="logo"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default Navigation;
