import React, {Component} from 'react';
import PropTypes from 'prop-types'
import styles from "./styles";

class Heading extends Component {
    // Defining props as static fields allows you to keep them inside of the class and
    // benefit from a common convention of keeping statics at the top of the class.
    // https://michalzalecki.com/react-components-and-class-properties/
    static propTypes = {
        heading: PropTypes.string.isRequired,
        subheading: PropTypes.string
    };

    render() {
        return (
            <React.Fragment>
                <h1 className="text-white roboto-condensed" style={styles.heading}>
                    {this.props.heading}
                </h1>

                {this.props.subheading &&
                <h2 className="text-white-50 roboto-condensed" style={styles.subheading}>
                    {this.props.subheading}
                </h2>
                }
            </React.Fragment>
        );
    }
}

export default Heading;
