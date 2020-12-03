/**
 * Page for the presentation
 */

import React, { Fragment } from 'react';

function Page(props) {
  const {
     currentUrl,
     goTo,
  } = props;
  return (
    <Fragment>
    <div className="container">
      <div className="col-md-8 pt-5">

             <div className="card text-center mb-4">
                 <div className="card-body">
                          {(currentUrl && currentUrl.id && currentUrl.url) ?
                              <div className="form-group" key={currentUrl.id}>
                                   <strong> Url: </strong>{currentUrl.url}
                                   <strong> Description: </strong>{currentUrl.description}
                                   <strong> Slug: </strong>{currentUrl.slug}
                                   <strong>  Notes: </strong>{currentUrl.notes}
                              </div>
                              :
                              <div className="form-group" >No results</div>
                          }
                </div>
                <div className="card-footer">
                    <input type="button" className="btn btn-secondary" name="Back" value="Back"
                       onClick={(event) => goTo('/urls-app')} />
                </div>
             </div>

      </div>
    </div>
    </Fragment>
  );
}

export default Page;
