
import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';













export const App = () => {
  // Your state code here
  const [userRecipe, setUserRecipe]=useState();

  
    
    
    
    
    
    

  

  
  
  

  return(
    <>
      {userRecipe?(
        <RecipePage choice={userRecipe} clickFn={setUserRecipe} />
      ):(
        <RecipeListPage clickFn={setUserRecipe}/>


      )}
      
      

    </>
  );
};
