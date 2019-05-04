import React, {Component} from 'react';
import {connect} from "react-redux";
import {Form, Row, Col, Button} from 'react-bootstrap';
import {newCollection} from "../../redux/actions/collections";
import Heading from "../../common/components/Heading/Heading";
import content from "./content";
import {generateRandomID} from "../../utils";

class CreateView extends Component {
    state = {
        hasError: false,
    };

    submitHandler(event) {
        const input = event.target.value;
        const hasError = this.validateInput(input);
        if (event.keyCode === 13 && !hasError) {
            this.props.newCollection({id: generateRandomID(), name: input, movies: []});
            this.setState({hasError: false});
        }

    }

    validateInput(input) {
        const hasError = input.length === 0;
        this.setState({hasError});
        return hasError;
    }


    render() {
        return (
            <div className="create-list">
                <Row>
                    <Heading
                        heading={content.newCollection}
                    />
                </Row>
                <Row>
                    <Col xs={5}>
                        <Form.Control
                            onKeyUp={(event) => {
                                this.submitHandler(event);
                            }}
                            type="text"
                            required
                            className={this.state.hasError && "has-error"}
                            placeholder={content.placeholder}/>
                    </Col>
                    <Col xs={3}>
                        {this.state.showlabel &&
                        <Button variant="outline-light">ENTER</Button>
                        }
                    </Col>
                </Row>
                <Row style={{marginTop: "10rem"}}>
                    <Col>
                        <h2 className="text-white">{content.myCollections}</h2>
                    </Col>
                    <Col xs={4}/>
                </Row>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newCollection: (collection) => {
            dispatch(newCollection(collection));
        },
    };
};

export default connect(null, mapDispatchToProps)(CreateView);
