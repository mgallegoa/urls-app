/**
 * Page for the presentation
 */

import React, { Fragment } from 'react';

function Page(props) {
  return (
    <Fragment>
      <div id="CreateUrl" className="row pt-5">
        <div className="col-md-4">

        <div className="card">
          <div className="card-header" align="center">
            <h4>Save URL</h4>
          </div>
          <div className="card-body">
            <form id="service-form">
              <div className="form-group">
                <input
                  type="text"
                  id="url-name"
                  placeholder="Enter the URL"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="url-description"
                  placeholder="Enter the description"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea
                  id="url-note"
                  placeholder="Enter Notes"
                  className="form-control rw-md-5"
                />
              </div>
              <input
                type="submit"
                value="save"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Page;
