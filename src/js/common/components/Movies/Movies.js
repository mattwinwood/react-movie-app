import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Movie from "../Movie/Movie";
import styles from "./styles";

class Movies extends Component {
    static propTypes = {
        props: PropTypes.shape({
            movies: PropTypes.array.isRequired,
            onClick: PropTypes.func
        })
    };

    renderMovies() {
        if(this.props.movies) return this.props.movies.map(movie => <Movie key={movie.imdbID} {...movie} onClick={this.props.onClick}/>)
    }
    render() {
        return (
            <div className="movies-container" style={styles.container}>
                {this.renderMovies()}
            </div>
        );
    }
}

export default Movies;
