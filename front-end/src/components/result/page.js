/**
 * Page for the presentation
 */
import React, { Fragment } from 'react';


const Page = (props) => {
  const {
    goTo
  } = props
  const results = props.results;
  return (
    <Fragment>
      <div className="col-md-8 pt-5">
        <div id="urls-list">
    
           {results.map((url) =>

             <div className="card text-center mb-4" key={url.id}>
                <div className="card-body">
                  <div className="form-group" onClick={() => goTo(`/urls-detail/${url.slug}`)}>
                     <strong> Url: </strong>{url.url}
                     <strong> Description: </strong>{url.description}
                     <strong> Slug: </strong>{url.slug}
                     <strong>  Notes: </strong>{url.notes}
                  </div>
                  <input type="button" className="btn btn-danger" name="delete" value="Delete Url" disabled/>
                </div>
             </div>
           )}

        </div>
      </div>
    </Fragment>
  );
}

export default Page;

