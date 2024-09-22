import React, { useState, useEffect } from "react";
import axios from "axios";
import MotionList from "./components/MotionList";
import CategoryFilter from "./components/CategoryFilter";
import TournamentFilter from "./components/TournamentFilter";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const [motions, setMotions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTournament, setSelectedTournament] = useState("");
  const [language, setLanguage] = useState("EN");

  // Fetch data on mount
  useEffect(() => {
    // Fetch motions
    axios
      .get(`http://localhost:8000/api/motion/?language=${language}`)
      .then((response) => setMotions(response.data))
      .catch((error) => console.error("Error fetching motions:", error));

    // Fetch categories
    axios
      .get("http://localhost:8000/api/category/")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));

    // Fetch tournaments
    axios
      .get("http://localhost:8000/api/tournament/")
      .then((response) => setTournaments(response.data))
      .catch((error) => console.error("Error fetching tournaments:", error));
  }, [language]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleTournamentChange = (tournamentId) => {
    setSelectedTournament(tournamentId);
  };

  return (


    <div className="container mx-auto">
      <h1 className="text-4xl font-black">Motion Bank</h1>

      <div className="flex gap-5">

      <LanguageSelector setLanguage={setLanguage} />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />

      <TournamentFilter
        tournaments={tournaments}
        selectedTournament={selectedTournament}
        handleTournamentChange={handleTournamentChange}
      />


      </div>

      <MotionList 
        motions={motions}
        selectedCategory={selectedCategory}
        selectedTournament={selectedTournament}
      />


    </div>
  );
}

export default App;
