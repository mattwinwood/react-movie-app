import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Card, Button} from 'react-bootstrap';
import styles from "./styles";

class Movie extends Component {
    static propTypes = {
        props: PropTypes.shape({
            movie: PropTypes.object.isRequired,
            onClick: PropTypes.func
        })
    };

    state = {
        active: false
    };

    toggleActiveHandler = (isActive) => this.setState({active: isActive});

    renderCardBody = (movie) => (
        <React.Fragment>
            <Card.Body style={styles.cardBody}>
                <Button
                    className="roboto-condensed"
                    style={styles.cardButton}
                    onClick={() => this.props.onClick(this.props)}
                    variant="outline-light roboto-condensed">
                    ADD TO COLLECTION
                </Button>
            </Card.Body>
            <div style={styles.gradient}/>
        </React.Fragment>
    )

    render() {
        return (
            <div
                onMouseEnter={() => this.toggleActiveHandler(true)}
                onMouseLeave={() => this.toggleActiveHandler(false)}
                style={styles.card}
                className="grow">
                <Card
                    style={{backgroundColor: "transparent"}}
                    text="white">
                    <div
                        style={{
                            width: "100%",
                            height: "25rem",
                            borderRadius: "2px",
                            backgroundSize: "cover",
                            backgroundImage: "url(" + this.props.Poster + ")"
                        }}/>
                    {this.state.active && this.renderCardBody(this.props)}
                </Card>
                <Card.Title
                    style={styles.cardTitle}
                    className="roboto-condensed text-white">
                    {this.props.Title} ({this.props.Year})
                </Card.Title>
            </div>
        );
    }
}

export default Movie;

