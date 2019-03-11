import React, { Component } from 'react';
import { recipe} from "../tempDetails";

export default class RecipeDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            recipe:{},
            url:`https://www.food2fork.com/api/get?key=2842cff6eb43c04282eb230b3697a0b9&rId=35382`
        }
    }
  render() {
    return (
      <div>
        <React.Fragment>
       
        </React.Fragment>
      </div>
    )
  }
}
