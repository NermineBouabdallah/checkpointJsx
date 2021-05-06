import './App.css';
import React from "react";
import Nav from "./component/Navbar"

function App() {
  return (
    <div>

<Nav/>
<form className="formu">
<table>
  <tr>
<td><label for="exampleInputEmail1">Email address</label></td>
<td><input type="email" placeholder="Enter email"></input> </td>
</tr>
<tr>
<td><label for="exampleInputPassword1">Password</label>  </td>
<td><input type="password"  placeholder="Password"></input> </td>
</tr>
<tr>
<td><input type="checkbox" ></input> </td>
<td><label  for="exampleCheck1">Check me out</label> </td>
</tr>
<tr>
<td><button type="submit" >Submit</button> </td>
</tr>
</table>
</form>
</div>

  );
}
export default App;