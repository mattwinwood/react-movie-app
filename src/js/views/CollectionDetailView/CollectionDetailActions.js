import React, {Component} from 'react';
import connect from "react-redux";
import PropTypes from 'prop-types'
import {Row, Col, Button, Form} from "react-bootstrap";
import {setActiveView} from "../../redux/actions/visibility";
import styles from "./styles";

class CollectionDetailActions extends Component {
    static propTypes = {
        props: PropTypes.shape({
            filterInput: PropTypes.string.isRequired,
            filterList: PropTypes.func.isRequired
        })
    };

    render() {
        return (
            <div style={styles.actions}>
                <Row>
                    <Col xs={4}>
                        <Button
                            style={styles.goBack}
                            onClick={() => {
                                this.props.setActiveView(["CreateView", "CollectionView"]); // TODO: Make singular
                            }}
                            variant="outline-light">Go Back</Button>
                        <Button
                            style={styles.add}
                            onClick={() => this.props.setActiveView(["MoviesView"])}
                            variant="outline-light">Add Movies</Button>
                    </Col>
                    <Col xs={4}/>
                    <Col xs={4}>
                        <Form.Control
                            type="text"
                            value={this.props.filterInput}
                            pattern="^[a-zA-Z0-9]+$"
                            onChange={(event) => this.props.filterList(event)}
                            placeholder="Filter by Title"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveView: (activeView) => {
            dispatch(setActiveView(activeView));
        }
    };
};

export default connect(null, mapDispatchToProps)(CollectionDetailActions);

