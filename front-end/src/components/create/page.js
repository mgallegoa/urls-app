/**
 * Page for the presentation
 */

import React, { Component, Fragment } from 'react';

class Page extends Component {

  constructor (props) {
    super(props)
    this.state = {
        urlName: '',
        urlDescription: '',
        urlNotes: ''
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeNotes = this.onChangeNotes.bind(this);
  }

  onChangeName(event){
      this.setState({urlName: event.target.value})
  }

  onChangeDescription(event){
      this.setState({urlDescription: event.target.value})
  }
  onChangeNotes(event){
      this.setState({urlNotes: event.target.value})
  }

  render() {
    const {
      createUrl,
      addUrlToArray,
    } = this.props

  return (
    <Fragment>
      <div className="col-md-4">
      <div id="main-create-url" className="pt-5">

        <div className="card">
          <div className="card-header" align="center">
            <h4>Save URL</h4>
          </div>
          <div className="card-body">
            <form id="create-url-form" onSubmit={(event) => {event.preventDefault();}}>
              <div className="form-group">
                <input
                  type="text"
                  id="url-name"
                  placeholder="Enter the URL"
                  className="form-control"
                  name="urlName"
                  ref="urlName"
                  value={this.state.urlName}
                  onChange={this.onChangeName}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="url-description"
                  placeholder="Enter the description"
                  className="form-control"
                  name="urlDescription"
                  ref="urlDescription"
                  value={this.state.urlDescription}
                  onChange={this.onChangeDescription}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="url-note"
                  placeholder="Enter Notes"
                  className="form-control rw-md-5"
                  name="urlNotes"
                  ref="urlNotes"
                  value={this.state.urlNotes}
                  onChange={this.onChangeNotes}
                />
              </div>
              <input
                type="submit"
                value="save"
                className="btn btn-primary btn-block"
                onClick={(event) => {
                  event.preventDefault();
                  var message = "";
                  if (this.refs.urlName.value === "") {
                       message += "Fill URLs name";
                  }
                  if (this.refs.urlDescription.value === "") {
                      message += " Fill the Description";
                  }
                  if (message !== "") {
                      return alert(message);
                  }
                  const newUrl = {
                          url: this.refs.urlName.value,
                          description: this.refs.urlDescription.value,
                          notes: this.refs.urlNotes.value,
                          slug: 'slug'
                       }
                  addUrlToArray()
                  createUrl(newUrl);
                    }
                    }
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
