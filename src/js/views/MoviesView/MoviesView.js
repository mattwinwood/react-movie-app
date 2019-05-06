import React, {Component} from 'react';
import {connect} from "react-redux";
import {Form, Row, Col, Button} from 'react-bootstrap';
import {getSharedCollection, setActiveCollection} from "../../redux/actions/collections";
import {getMovies, addMovie} from "../../redux/actions/movies";
import {setActiveView} from "../../redux/actions/visibility";
import Movies from "../../common/components/Movies/Movies";
import {CONFIG_DEFAULT_SEARCH_TERM} from "../../../config";
import styles from "./styles";
import content from "./content";
import Heading from "../../common/components/Heading/Heading";
import {getAverageRating} from "../../utils";

class MoviesView extends Component {
    componentDidMount() {
        this.props.getMovies(CONFIG_DEFAULT_SEARCH_TERM);
    }

    updateHandler(event) {
        const searchTerm = event.target.value;
        if (searchTerm && event.keyCode === 13) {
            this.props.getMovies(searchTerm);
        }
    }

    // Must user arrow function here
    // https://daveceddia.com/avoid-bind-when-passing-props/
    addMovieHandler = (movie) => {
        if (this.props.sharedCollection) {
            this.props.setActiveCollection(this.props.sharedCollection);
        }
        this.props.addMovie(movie);
    }

    sharedSelectionHandler(event) {
        const id = event.target.value;
        this.props.getSharedCollection(id);
    }

    render() {
        const {collection} = this.props;
        return (
            <div className="movies-view-container">
                {collection &&
                <React.Fragment>
                    <Heading
                        heading={`${collection.name} (${collection.movies.length})`}
                        subheading={`Average Rating: ${collection.movies && getAverageRating(collection.movies)}`}
                    />
                    <Row style={{marginTop: "3rem", marginBottom: "2rem"}}>
                        <Col xs={5}>
                            <Form.Control
                                type="text"
                                onKeyUp={(e) => this.updateHandler(e)}
                                placeholder="Search For Movies By Title"/>
                        </Col>
                        <Col xs={3}>
                            <Form.Control as="select" onChange={this.sharedSelectionHandler.bind(this)}>
                                {this.props.collections.map((collection, index) => (
                                    // TODO: Add multi select and update
                                    <option
                                        selected={collection.id === this.props.collection.id}
                                        value={collection.id}
                                        key={index}>Add to {collection.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Col>
                        <Col xs={1}/>
                        <Col xs={3}>
                            <Button
                                disabled={this.props.collection.movies.length === 0}
                                style={styles.goBack}
                                onClick={() => {
                                    this.props.setActiveView(["CollectionDetailView"]);
                                }}
                                variant="outline-light">{content.complete}</Button>
                        </Col>
                    </Row>
                </React.Fragment>
                }
                <Movies
                    onClick={this.addMovieHandler}
                    {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        collections: state.collections,
        collection: state.collection,
        sharedCollection: state.sharedCollection
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: (searchTerm) => {
            dispatch(getMovies(searchTerm));
        },
        addMovie: (movie) => {
            dispatch(addMovie(movie));
        },
        getSharedCollection: (id) => {
            dispatch(getSharedCollection(id));
        },
        setActiveCollection: (collection) => {
            dispatch(setActiveCollection(collection));
        },
        setActiveView: (activeView) => {
            dispatch(setActiveView(activeView));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesView);
