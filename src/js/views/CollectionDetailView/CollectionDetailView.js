import React, {Component} from 'react';
import {connect} from "react-redux";
import Heading from "../../common/components/Heading/Heading";
import CollectionTable from "./CollectionTable";
import CollectionDetailActions from "./CollectionDetailActions";
import {updateCollection, setActiveCollection} from "../../redux/actions/collections";
import {setActiveView} from "../../redux/actions/visibility";
import {getAverageRating, compareByAsc, compareByDesc} from "../../utils";

// This class contains a great example of why Redux is awesome and how you can find yourself in inheritance hell without it.
class CollectionDetailView extends Component {
    // Initializing state inside of the constructor comes with an overhead of calling super.
    // Instead, we can initialize state directly as a class property.
    // https://michalzalecki.com/react-components-and-class-properties/
    state = {
        tableData: this.props.collection.movies, //
        filterInput: "",
        activeSortKey: "",
        isAscending: 0
    }

    componentDidMount() {
        if (this.state.tableData.length === 0) this.props.setActiveView("MoviesView");
    }

    toggleSortDirection() {
        this.setState({isAscending: !this.state.isAscending});
    }

    onSortHandler(key) {
        const {tableData, isAscending} = this.state;

        if (!isAscending) {
            tableData.sort(compareByAsc(key));
            this.toggleSortDirection();
        } else {
            tableData.sort(compareByDesc(key));
            this.toggleSortDirection();
        }
        this.setState({tableData});
    }

    filterList(event) {
        let tableData = this.props.collection.movies; // 1.0 Get Movies
        tableData = tableData.filter(function (item) {
            const title = item.Title.toLowerCase(); // 2.0 Get Movie Title
            return title.search(
                event.target.value.toLowerCase()) !== -1; // 3.0 Check against user input
        });
        this.setState({tableData, filterInput: event.target.value});
    }

    // Fires when delete button is clicked
    deleteMovieHandler(movie) {
        const collection = this.props.collection;
        collection["movies"] = collection.movies.filter((obj) => obj.imdbID !== movie.imdbID); // Get rest of the movies
        this.setState({filterInput: "", tableData: collection.movies});
    }

    // Fires when movie rating is changed.
    updateMovieHandler(event, key, id) {
        const value = parseInt(event.target.value);
        const updatedMovies = this.updateMovieByKey(key, value, id); // By key (and id). Needs simplified.
        const updatedCollection = {...this.props.collection, movies: updatedMovies};
        this.setState({tableData: updatedMovies});
        this.props.updateCollection(updatedCollection, updatedCollection.id);
    }

    // Helper method for update handler.
    // Will allow us to use the same method as movie properties are added to table.
    updateMovieByKey(key, value, id) {
        return this.props.collection.movies.map((movie) =>
            (movie.imdbID === id) ? {...movie, [key]: value} : movie);
    }

    render() {
        const {collection} = this.props;
        return (
            <React.Fragment>
                <Heading
                    heading={`${collection.name} (${collection.movies.length})`}
                    subheading={`Average Rating: ${collection.movies && getAverageRating(collection.movies)}`}
                />
                <CollectionDetailActions filterList={this.filterList.bind(this)} filterInput={this.state.filterInput}/>
                <CollectionTable
                    filterList={this.filterList.bind(this)}
                    onSortHandler={this.onSortHandler.bind(this)}
                    deleteHandler={this.deleteMovieHandler.bind(this)}
                    updateHandler={this.updateMovieHandler.bind(this)}
                    tableData={this.state.tableData}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        collections: state.collections,
        collection: state.collection,
        activeView: state.activeView
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollection: (collection, id) => {
            dispatch(updateCollection(collection, id));
        },
        setActiveView: (activeView) => {
            dispatch(setActiveView(activeView));
        },
        setActiveCollection: (collection) => {
            dispatch(setActiveCollection(collection));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetailView);
