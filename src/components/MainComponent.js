import React from 'react';
import { DISHES } from '../shared/dishes';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
//import Contact from './contactComponent';

class Main extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      dishes: DISHES
	    }
	}

	render(){
		return(
		    <div>
		      <Navbar dark color="primary">
		        <div className="container">
		          <NavbarBrand href="/">{"Sophie\'s Restaurant"}</NavbarBrand>
		        </div>
		      </Navbar>
		      <Header />
		      <Menu dishes={this.state.dishes} />
		      <Footer />
		    </div>
		);
	}
}

export default Main;
