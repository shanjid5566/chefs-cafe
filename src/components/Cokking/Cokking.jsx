import Recipe from "../Recipe/Recipe";

const Cokking = ({ wantToCook ,handleCurrentlyCooking,currentlyCooking ,totalMinutes,totalCalories}) => {
  return (
    <div className=" w-2/5 grid grid-cols-1 gap-12 h-fit p-2">
      <div className="card bg-base-100 shadow-sm p-6">
        <h2 className="text-[#282828] text-2xl font-bold text-center ">
          Want to cook : {wantToCook.length}
        </h2>
        <hr className="mt-4 w-58 mx-auto"></hr>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {wantToCook.map((recipe, idx) => {
                return (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{recipe.recipe_name}</td>
                    <td>{recipe.preparing_time} Minutes</td>
                    <td>{recipe.calories} calories</td>
                    <td>
                      <button
                        className="bg-[#0be58a] px-4 w-32 py-2 rounded-3xl border-1 border-[#0be58a] text-[#150B2B] text-sm cursor-pointer"
                        onClick={()=>handleCurrentlyCooking(recipe)}
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm p-6">
        <h2 className="text-[#282828] text-2xl font-bold text-center ">
          Currently cooking : {currentlyCooking.length}
        </h2>
        <hr className="mt-4 w-58 mx-auto"></hr>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {currentlyCooking.map((recipe, idx) => {
                return (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{recipe.recipe_name}</td>
                    <td>{recipe.preparing_time} Minutes</td>
                    <td>{recipe.calories} calories</td>
                  </tr>
                  
                );
              })}
              <tr>
                    <th></th>
                    <td></td>
                    <td>Total Time = {totalMinutes} Minutes</td>
                    <td>Total calories = {totalCalories} Calories</td>
                  </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cokking;
