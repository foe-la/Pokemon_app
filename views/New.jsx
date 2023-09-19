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
               {/* <form action="/pokemon/NewPoke/" method='POST'> 
          Name: <input type="text" name="name" />
          <br />
          Image URL: <input type="text" name="img" />
          <br />
          Is this Pokemon Evolved? <input type="checkbox" name="evolved" />
          <br />
          <input type="submit" value="Add Pokemon" />
        </form> */}
           </div>);
       }
     }

     module.exports = New;