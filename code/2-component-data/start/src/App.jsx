import "./index.css";
import React from "react";
import RecipeTitle from "./RecipeTitle";
import IngredientList from "./IngredientList";
import HowToMake from "./HowToMake";

function App() {
  const recipe = {
    title: "Mashed potatoes",
    feedback: {
      rating: 4.8,
      reviews: 20,
    },
    ingredients: [
      { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
      { name: "4 Tbsp butter", prepared: false },
      { name: "1/8 cup heavy cream", prepared: false },
      { name: "Salt", prepared: false },
      { name: "Pepper", prepared: false },
    ],
  };
  const howToMake = {
    makingOrder: [
      { name: "濃い塩水が入った鍋に、カットしたじゃがいもを加えます" },
      { name: "鍋を沸騰させます" },
      {
        name: "フォークを刺せるくらいの柔らかさまでジャガイモを茹でます（約15~20分）",
      },
      { name: "ジャガイモをざるにあけます" },
      { name: "ジャガイモを鍋に戻します" },
      { name: "バター、クリーム、塩、コショウを加えて好みの味にします" },
      { name: "ジャガイモをマッシュします" },
      { name: "必要に応じて味を整え、バターとクリームを追加します" },
    ],
  };
  return (
    <article>
      <h1>Recipe Manager</h1>
      <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
      <IngredientList ingredients={recipe.ingredients} />
      <HowToMake makingOrder={howToMake.makingOrder} />
    </article>
  );
}

export default App;
