import { useEffect, useState } from "react";

const RecipeCards = ({handleWantToCook}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="recipe-items w-3/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {recipes.map((recipe) => (
          <div className="card bg-base-100 shadow-sm p-6">
            <figure>
              <img src={recipe.recipe_image} alt={recipe.recipe_name} />
            </figure>
            <div className="card-body ml-[-20px] justify-between">
              <div>
                <h2 className="card-title text-[#282828] text-2xl font-semibold">
                  {recipe.recipe_name}
                </h2>
                <p className="text-[#878787] text-lg">
                  {recipe.short_description}
                </p>
              </div>
              <ul className=" text-[#282828] text-2xl font-medium ">
                Ingredients : {recipe.ingredients.length}
                {recipe.ingredients.map((listItem,idx) => (
                  <li key={idx} className="list-disc ml-[20px] text-[#878787] font-normal text-lg">
                    {listItem}
                  </li>
                ))}
              </ul>
              <div className="flex  justify-evenly">
                <p className="text-[#282828d2] text-lg">
                  <i class="fa-regular fa-clock"></i>{" "}
                  <span>{recipe.preparing_time} Minutes</span>
                </p>
                <p className="text-[#282828d2] text-lg">
                  <i class="fa-solid fa-fire"></i>{" "}
                  <span>{recipe.calories} calories</span>
                </p>
              </div>
              <div className="card-actions mt-3">
                <button
                  className="bg-[#0be58a] px-8 py-3 rounded-3xl border-2 border-[#0be58a] text-[#150B2B] text-xl cursor-pointer" onClick={()=>handleWantToCook(recipe)}
                >
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCards;
