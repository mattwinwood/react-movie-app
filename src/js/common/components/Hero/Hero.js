import React, {Component} from 'react';
import PropTypes from 'prop-types'
import styles from "./styles";

class Hero extends Component {
    // Defining props as static fields allows you to keep them inside of the class and
    // benefit from a common convention of keeping statics at the top of the class.
    // https://michalzalecki.com/react-components-and-class-properties/
    static propTypes = {
        image: PropTypes.string.isRequired
    };

    render() {
        return (
            <div style={{
                width: "100%",
                height: "700px",
                position: "absolute",
                zIndex: "-1",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: "url(" + this.props.image + ")"
            }}>
                <div style={styles.gradient}/>
            </div>
        );
    }
}

export default Hero;
