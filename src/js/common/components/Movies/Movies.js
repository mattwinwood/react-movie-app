import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Movie from "../Movie/Movie";
import styles from "./styles";

class Movies extends Component {
    // Defining props as static fields allows you to keep them inside of the class and
    // benefit from a common convention of keeping statics at the top of the class.
    static propTypes = {
        props: PropTypes.shape({
            movies: PropTypes.array.isRequired,
            onClick: PropTypes.func
        })
    };

    renderMovies = () => this.props.movies.map(movie => <Movie key={movie.imdbID} {...movie} onClick={this.props.onClick}/>)

    render() {

        return (
            <div className="movies-container" style={styles.container}>
                {this.props.movies && this.renderMovies()}
            </div>
        );
    }
}

export default Movies;
