import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody} from 'reactstrap';

class DishDetail extends Component {

  render(){
    if (null!=this.props.dish) {
      const dishComments = this.props.dish.comments.map((comment)=>{
        return(
          <div key={comment.id}>
            <div>Rating: {comment.rating}</div>
            <div>{comment.comment}</div>
            <div>-- {comment.author}, {comment.date}</div>
          </div>
        );
      });
      
      return(
        <div className="row">
        <div className = "col-12 col-md-5 m-1">
        <Card>
            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
        </Card>
        </div>
            <div className = "col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {dishComments}
            </div>
        </div>
      );
    } else{
      return(
        <div></div>
      );
    }
  }
}


export default DishDetail;