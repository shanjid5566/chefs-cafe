import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipe from "./components/Recipe/Recipe";
import RecipeCards from "./components/RecipeCards/RecipeCards";
import Cokking from "./components/Cokking/Cokking";
import { useState } from "react";

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const [totalMinutes, settotalMinutes] = useState(0);
  const [totalCalories, settotalCalories] = useState(0);

  const handleWantToCook = (recepi) => {
    // const newWantToCook = [...wantToCook ,recepi]
    const exitingRecipi = wantToCook.find(
      (res) => res.recipe_id === recepi.recipe_id
    );
    if (!exitingRecipi) {
      setWantToCook([...wantToCook, recepi]);
    } else {
      return false;
    }
  };
  const handleCurrentlyCooking = (recepi) => {
    const exitingRecipi = wantToCook.filter(
      (res) => res.recipe_id !== recepi.recipe_id
    );
    settotalMinutes(totalMinutes + recepi.preparing_time);
    settotalCalories(totalCalories + recepi.calories);
    setWantToCook(exitingRecipi);

    setCurrentlyCooking([...currentlyCooking, recepi]);
  };

  return (
    <>
      {/* HEADER SECTION */}
      <Header />
      {/* Banner Section */}
      <Banner />

      <main>
        {/* Our Recipe section */}

        <Recipe />
        <section className="container mx-auto pt-18 flex gap-4">
          <RecipeCards handleWantToCook={handleWantToCook} />
          <Cokking
            wantToCook={wantToCook}
            handleCurrentlyCooking={handleCurrentlyCooking}
            currentlyCooking={currentlyCooking}
            totalMinutes={totalMinutes}
            totalCalories={totalCalories}
          />
        </section>
      </main>
    </>
  );
}

export default App;
