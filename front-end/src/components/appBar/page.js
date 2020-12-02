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
       <div className="navbar-nav ml-auto">
          <a href="https://github.com/mgallegoa/urls-app" 
               className="navbar-brand" target="_blank" rel="noreferrer">About App</a>
          <a href="https://drive.google.com/file/d/1pgfJWJiG-JulEoL9gS_IUom-lipZ32YQ/view?usp=sharing" 
               className="navbar-brand" target="_blank" rel="noreferrer">About My</a>
       </div>
       <a href="https://drive.google.com/file/d/1pgfJWJiG-JulEoL9gS_IUom-lipZ32YQ/view?usp=sharing" target="_blank" rel="noreferrer">
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
