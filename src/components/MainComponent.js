import React from 'react';
import { DISHES } from '../shared/dishes';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Contact from './contactComponent';

class Main extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      dishes: DISHES
	    }
	}

	// componentDidUpdate(){
	// 	console.log(this.state.selectedDish);
	// }

	render(){
		return(
		    <div>
		      <Navbar dark color="primary">
		        <div className="container">
		          <NavbarBrand href="/">{"Sophie\'s Restaurant"}</NavbarBrand>
		        </div>
		      </Navbar>
		      <Menu dishes={this.state.dishes} />
		    </div>
		);
	}
}

export default Main;
