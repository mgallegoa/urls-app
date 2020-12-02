/**
 * Page for the presentation
 */
/*
    {UrlType.map(
      (urlType) =>
          <option value={urlType.url}>{urlType.description}</option>
      )}
 */

import React, { Fragment } from 'react';
import UrlType from '../../models/url'


const Page = (props) => {
  const results = props.results;
  return (
    <Fragment>
      <div className="col-md-8 pt-5">
        <div id="urls-list">
    
           {results.map((url) =>

             <div className="card text-center mb-4" key={url.urlId}>
                <div className="card-body">
                  <div className="form-group">
                     <strong> Url: </strong>{url.url}
                     <strong> Description: </strong>{url.description}
                     <strong key={url.urlId}> Slug: </strong>{url.slug}
                     <strong>  Notes: </strong>{url.notes}
                  </div>
                  <a href="#" className="btn btn-danger" name="delete" >Delete Url</a>
                </div>
             </div>
           )}

        </div>
      </div>
    </Fragment>
  );
}

export default Page;

