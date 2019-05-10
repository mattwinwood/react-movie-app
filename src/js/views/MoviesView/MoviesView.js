import React, {Component} from 'react';
import {connect} from "react-redux";
import {Form, Row, Col, Button} from 'react-bootstrap';
import {setSharedCollection, setActiveCollection} from "../../redux/actions/collections";
import {getMovies, addMovie} from "../../redux/actions/movies";
import {setActiveView} from "../../redux/actions/visibility";
import {getAverageRating} from "../../utils";
import Movies from "../../common/components/Movies/Movies";
import Heading from "../../common/components/Heading/Heading";
import {CONFIG_DEFAULT_SEARCH_TERM} from "../../../config";
import styles from "./styles";
import content from "./content";

class MoviesView extends Component {
    componentDidMount() {
        this.props.getMovies(CONFIG_DEFAULT_SEARCH_TERM);
    }

    // Fires when the user searches for movies
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

    // Fires when the user changes the value of the collections dropdown. Sets this.props.sharedCollection
    sharedSelectionHandler(event) {
        const id = event.target.value;
        this.props.setSharedCollection(id);
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

// TODO: Could be simplified further by using containers
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
        setSharedCollection: (id) => {
            dispatch(setSharedCollection(id));
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
