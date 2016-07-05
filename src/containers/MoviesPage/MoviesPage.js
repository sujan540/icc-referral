import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { isLoaded, load, addMovie } from 'redux-base/modules/movies';

const mapStateToProps = state => ({
  error: state.movies.error,
  loading: state.movies.loading,
  isDataLoaded: isLoaded(state)
});

const mapActionsToProps = { load, addMovie };

const reduxFormConfig = {
  form: 'movieForm',                      // the name of your form and the key to where your form's state will be mounted
  fields: ['title', 'sprocketCount', 'owner'] // a list of all your fields in your form
};

export class MoviesPage extends Component {

  componentWillMount() {
    const { isDataLoaded, load: loadData } = this.props;

    if (!isDataLoaded) {
      loadData();
    }
  }

  handleMovie(data) {
    const { load: loadData } = this.props;
    this.props.dispatch(addMovie(data.title, data.sprocketCount, data.owner));
    loadData();
  }

  render() {
    const { movies, error, loading, fields: { title, sprocketCount, owner }, handleSubmit } = this.props;
    let refreshClassName = 'fa fa-refresh';
    if (loading) {
      refreshClassName += ' fa-spin';
    }

    const styles = require('./MoviesPage.scss');

    return (
      <div>
          <h2 className="sub-header">Add Movie</h2>
          <form onSubmit={handleSubmit(::this.handleMovie)}>
            <input type="text" {...title} placeholder="title"/>
            <input type="text" {...sprocketCount} placeholder="sprocketCount"/>
            <input type="text" {...owner} placeholder="owner"/>
            <button onSubmit={handleSubmit(::this.handleMovie)}>Add Movie</button>
          </form>
          <h2 className="sub-header">Movies</h2>

          <button className={`${styles.refreshBtn} btn btn-success`} onClick={this.props.load}>
            <i className={refreshClassName}/> {' '} Reload movies
          </button>

          <p>
            This widgets are stored in your session, so feel free to edit it and refresh.
          </p>

          {error &&
          <div className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            {' '}
            {error.toString()}
          </div>}

          {loading &&
          <div>
            Loading...(here you can render spinner or whatever)
          </div>}

          <div className="table-responsive">
          {movies && movies.length &&
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                {
                  movies.map((movie) =>
                    <tr key={movie.id}>
                      <td>{movie.id}</td>
                      <td>{movie.title}</td>
                      <td>{movie.sprocketCount}</td>
                      <td>{movie.owner}</td>
                    </tr>)
                }
              </tbody>
            </table>
          }
          </div>
      </div>
    );
  }
}

MoviesPage.propTypes = {
  fields: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  movies: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
  load: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired

};

export default reduxForm(reduxFormConfig, mapStateToProps, mapActionsToProps)(MoviesPage);
