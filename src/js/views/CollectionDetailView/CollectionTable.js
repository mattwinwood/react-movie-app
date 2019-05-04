import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Table, Button, Form} from "react-bootstrap";
import styles from "./styles";

class CollectionTable extends Component {
    static propTypes = {
        props: PropTypes.shape({
            tableData: PropTypes.array.isRequired,
            onSortHandler: PropTypes.func.isRequired,
            updateHandler: PropTypes.func.isRequired,
            deleteHandler: PropTypes.func.isRequired,
            filterList: PropTypes.func.isRequired
        })
    };

    tableHead = () => (
        <thead>
        <tr>
            <th key="number">#</th>
            <th key="name" onClick={() => this.props.onSortHandler("Title")}>Movie Name</th>
            <th key="avg-rating" onClick={() => this.props.onSortHandler("userRating")}>User Rating</th>
            <th key="year" onClick={() => this.props.onSortHandler("Year")}>Year</th>
            <th key="actions">Actions</th>
        </tr>
        </thead>
    )

    tableRow = () => {
        let rows = this.props.tableData.map((movie, index) => {
            return (
                <tr
                    key={movie.id + movie.Title + index}>
                    <td key={index}>{index + 1}</td>
                    <td key={movie.id + index}>{movie.Title}</td>
                    <td key="rating">
                        <Form.Group>
                            <Form.Control
                                onChange={(event) => this.props.updateHandler(event, "userRating", movie.imdbID)}
                                value={movie.userRating}
                                as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Form.Control>
                        </Form.Group>
                    </td>
                    <td key="year">{movie.Year}</td>
                    <td key="actions">
                        <Button
                            onClick={() => this.props.deleteHandler(movie)}
                            size="sm"
                            variant="outline-danger">
                            Delete
                        </Button>
                    </td>
                </tr>);
        })
        return <tbody>{rows}</tbody>
    }

    renderTable = () => {
        return (
            <Table style={styles.table}striped bordered hover variant="dark">
                {this.tableHead()}
                {this.tableRow()}
            </Table>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.props.tableData.length > 0 && this.renderTable()}
            </React.Fragment>
        );
    }
}

export default CollectionTable;

