import React, { Component } from 'react';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import "./App.css";


class App extends Component {
  state ={
    recipes:recipes,
    url:"https://www.food2fork.com/api/search?key=2842cff6eb43c04282eb230b3697a0b9",
    details_id: 35384,
    pageIndex:0
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

displayPage = (index) =>{
  switch(index){
    default:
    case 1:
    return(<RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails}/>)
    break;
    case 0:
   return (<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>)
  }
}

handleIndex = index =>{
  this.setState({
    pageIndex:index
  })
}

handleDetails = (index, id) =>{
  this.setState({
    pageIndex:index,
    details_id:id
  })
}
  render() {
   
    return (
     <React.Fragment>
      
       {this.displayPage(this.state.pageIndex)}
     </React.Fragment>
    );
  }
}

export default App;
