/**
 * Page for the presentation
 */

import React, { Fragment } from 'react';

function Page(props) {
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light">
       <a href="/" className="navbar-brand">
          App Saved Urls
       </a>
       <a href="https://gorillalogic.com/" target="_blank" rel="noreferrer">
         <img
           src="https://www.gravatar.com/avatar/dd43ba3e67fd9efdb57c9b60b16c4306.jpg?s=80" 
           alt="Manuel Arias"
           className="rounded-circle"
        />
        </a>
      </nav>

    </Fragment>
  );
}

export default Page;
