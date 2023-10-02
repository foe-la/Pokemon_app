const React = require('react');

   class New extends React.Component {
     render() {
       return (
        
           <div>
               <h1>New Pokemon page</h1>
               {/* ?Image input field? NOTE: action will be the route, method will be the HTTP verb */}
               <form action="/pokemon/New" method="POST">
                 Name: <input type="text" name="name" /><br/>
                 Image URL: <input type="text" name="image" /><br/><br/>
                 <input type="submit" name="" value="Create Pokemon"/>
               </form>
               <nav>
                <h1>
                   <a href="/pokemon"> Go to index page </a>
                </h1>
              </nav>
           </div>);
       }
     }

     module.exports = New;