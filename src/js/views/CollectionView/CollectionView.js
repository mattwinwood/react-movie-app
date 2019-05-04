import React, {Component} from 'react';
import {connect} from "react-redux";
import {Table, Badge} from 'react-bootstrap';
import {setActiveCollection} from "../../redux/actions/collections";
import {setActiveView} from "../../redux/actions/visibility";
import {getAverageRating} from "../../utils";
import styles from "./styles";

class CollectionView extends Component {
    tableHead = () => (
        <thead>
        <tr>
            <th key="number">#</th>
            <th key="name">Name</th>
            <th key="avg-rating">Average Rating</th>
        </tr>
        </thead>
    )

    // Collection name, quantity, average rating...
    tableRow = (collections) => {
        let rows = collections.map((collection, index) => {
            return (
                <tr
                    style={styles.tableRow}
                    onClick={() => {
                        this.props.setActiveCollection(collection)
                        this.props.setActiveView("CollectionDetailView");
                    }}
                    key={collection.id + "_" + collection.name}>
                    <td key={index}>{index + 1}</td>
                    <td key={collection.id}>
                        {`${collection.name} `}
                        <Badge variant="secondary">{`${collection.movies.length} Movies`}</Badge>
                    </td>
                    <td key="average-rating">{collection.movies.length > 0 && getAverageRating(collection.movies)} </td>
                </tr>);
        })
        return <tbody>{rows}</tbody>
    }

    render() {
        return (
            <div className="collections-container">
                <Table striped bordered hover variant="dark">
                    {this.tableHead()}
                    {this.tableRow(this.props.collections)}
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        collections: state.collections
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveCollection: (collection) => {
            dispatch(setActiveCollection(collection));
        },
        setActiveView: (activeView) => {
            dispatch(setActiveView(activeView));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionView);
