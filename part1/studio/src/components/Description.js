import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
   const authorLink="https://thecozycook.com/aboutthecozycook/"
    const authorPhoto="https://thecozycook.com/wp-content/uploads/2021/11/The-Cozy-Cook.jpg"
    const authorName="Stephanie, The Cozy Cook"
    return(
        <div className = {styles.recipeAuthorBlock}>
      <img src={"https://thecozycook.com/wp-content/uploads/2021/11/The-Cozy-Cook.jpg"} alt = "Stephanie, the author of The Cozy Cook" className={styles.imageUpdates} />
      <div>
         <h3>{"Stephanie, The Cozy Cook"}</h3>
         <a href={"https://thecozycook.com/aboutthecozycook/"}>Blog name</a> 
         </div>
      </div>
      );
}

class RecipeDescription extends React.Component {
    render() {
        return(
    <div> 
        <div>
           <h1>Olive Garden’s Alfredo Sauce</h1>
           <p>Make Olive Garden’s Alfredo Sauce Recipe at home in just 20 minutes! Pair it with Fettuccine for an easy dinner idea the whole family will love!</p>
        </div>
        <RecipeAuthor />
     </div> 
            )
    }  
}
/*<div className = {RecipeDescription}>
    render()
       <div> 
      <div>
         <h1>Olive Garden’s Alfredo Sauce</h1>
         <p>Make Olive Garden’s Alfredo Sauce Recipe at home in just 20 minutes! Pair it with Fettuccine for an easy dinner idea the whole family will love!</p>
      </div>
      <RecipeAuthor /> */

export default RecipeDescription;