/**
 * Page for the presentation
 */

import React, { Component, Fragment } from 'react';

class Page extends Component {

  constructor (props) {
    super(props)
    this.state = {
    }
    this.onImputChange = this.onImputChange.bind(this);
  }

  onImputChange(event) {
    this.setState({
      [event.target.name]: event.target.value 
    });
  }

  render() {
    const {
      urlName,
      urlDescription,
      urlNotes
    } = this.state;
    const {
      saveUrl,
    } = this.props

  return (
    <Fragment>
      <div className="col-md-4">
      <div id="CreateUrl" className="pt-5">

        <div className="card">
          <div className="card-header" align="center">
            <h4>Save URL</h4>
          </div>
          <div className="card-body">
            <form id="saveUrl-form" onSubmit={(event) => {event.preventDefault();}}>
              <div className="form-group">
                <input
                  type="text"
                  id="url-name"
                  placeholder="Enter the URL"
                  className="form-control"
                  value={this.state.urlName}
                  onChange={this.onImputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="url-description"
                  placeholder="Enter the description"
                  className="form-control"
                  value={this.state.urlDescription}
                  onChange={this.onImputChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  id="url-note"
                  placeholder="Enter Notes"
                  className="form-control rw-md-5"
                  value={this.state.urlNotes}
                  onChange={this.onImputChange}
                />
              </div>
              <input
                type="submit"
                value="save"
                className="btn btn-primary btn-block"
                onClick={(event) => {
                  event.preventDefault()
                  saveUrl();
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}
}

export default Page;
