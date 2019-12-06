import React from 'react';
import {connect} from 'react-redux';
import {Card, CardTitle, CardMedia} from 'material-ui';
import {openMovieModal} from '../movie-modal/movie-modal.actions';

const styles = {
    cardTitle: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    cardMedia: {
        maxHeight: 394,
        overflow: 'hidden'
    },
    card: {
        cursor: 'pointer',
        height: 400,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%'
    }
};

class MovieCardComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMouseOver: false
        };
    }

    render() {
        const {movie, openMovieModal} = this.props;

        const subtitle = this.state.isMouseOver ? movie.overview : null;

        return (
            <Card
                style={styles.card}
                onMouseOver={() => this.setState({isMouseOver: true})}
                onMouseLeave={() => this.setState({isMouseOver: false})}
                onClick={() => openMovieModal(movie.id)}
            >
                {/* <CardTitle title={<div style={styles.cardTitle}>{movie.title}</div>} /> */}

                <CardMedia
                    style={styles.cardMedia}
                    overlay={
                        <CardTitle 
                            title={movie.title}
                            subtitle={subtitle}
                        />
                    }
                >
                    <img style={styles.bgImage} src={movie.poster_path} alt='test1' />
                </CardMedia>
            </Card>
        );
    }
}

export default connect(
    () => ({}),
    { openMovieModal }
)(MovieCardComponent);