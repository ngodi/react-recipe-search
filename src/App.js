import React, { Component } from 'react';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import "./App.css";


class App extends Component {
  state ={
    recipes:recipes,
    url:"https://www.food2fork.com/api/search?key=2842cff6eb43c04282eb230b3697a0b9",
    details_id: 35382
  }

/* async getRecipes(){

  try{
    const data = await fetch(this.state.url);
    const jsonData = await data.json();
    this.setState({
      recipes:jsonData.recipes
    })

  }catch(error){
    console.log(error)
  }
      
  }

componentDidMount(){
  this.getRecipes()
}
*/
  render() {
   
    return (
     <React.Fragment>
       <RecipeList recipes={this.state.recipes}/>
       <RecipeDetails id={this.state.details_id}/>
     </React.Fragment>
    );
  }
}

export default App;
