import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';


export default class RecipeList extends Component {
    
  render() {
<<<<<<< HEAD
    const {recipes, handleDetails,value,handleChange,handleSubmit,error} = this.props;
=======
    const {recipes, handleDetails} = this.props;
>>>>>>> 571f808b118c19298791a01ff114b253061b6a71
    return (
     <React.Fragment>
         
          <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
          <div className="container my-5">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                   <h1 className="text-slanted">recipe list</h1>
              </div>
            </div>
            <div className="row">
<<<<<<< HEAD
            {error?<h1 className="text-danger text-center">{error}</h1>:
               recipes.map(recipe => {
                return <Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={()=>handleDetails(0,recipe.recipe_id)}/>   
                     })
             }
            
=======
              {
                  recipes.map(recipe => {
                      return <Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={()=>handleDetails(0,recipe.recipe_id)}/>   
                           })
              }
>>>>>>> 571f808b118c19298791a01ff114b253061b6a71
           </div>
          </div>
         
     </React.Fragment>
       
      
    )
  }
}
