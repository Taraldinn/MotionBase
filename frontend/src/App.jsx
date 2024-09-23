import React, { useState, useEffect } from "react";
import axios from "axios";
import MotionList from "./components/MotionList";
import CategoryFilter from "./components/CategoryFilter";
import TournamentFilter from "./components/TournamentFilter";
import LanguageSelector from "./components/LanguageSelector";
import { Globe, Filter, Trophy } from "lucide-react";


export default function Component() {
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [motions, setMotions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTournament, setSelectedTournament] = useState("");
  const [language, setLanguage] = useState("BN");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [motionsRes, categoriesRes, tournamentsRes] = await Promise.all([
          axios.get(`${VITE_API_BASE_URL}/motion/?language=${language}`),
          axios.get(`${VITE_API_BASE_URL}/category`),
          axios.get(`${VITE_API_BASE_URL}/tournament/`)
        ]);

        setMotions(motionsRes.data);
        setCategories(categoriesRes.data);
        setTournaments(tournamentsRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [VITE_API_BASE_URL, language]);

  const handleCategoryChange = (categoryId) => setSelectedCategory(categoryId);
  const handleTournamentChange = (tournamentId) => setSelectedTournament(tournamentId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Motion Bank
          </h1>
          <p className="text-xl text-gray-600">
            Explore and filter debate motions from various tournaments
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-700">
                <Globe className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Language</h2>
              </div>
              <LanguageSelector setLanguage={setLanguage} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-700">
                <Filter className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Category</h2>
              </div>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-700">
                <Trophy className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Tournament</h2>
              </div>
              <TournamentFilter
                tournaments={tournaments}
                selectedTournament={selectedTournament}
                handleTournamentChange={handleTournamentChange}
              />
            </div>
          </div>
        </div>

        <MotionList
          motions={motions}
          selectedCategory={selectedCategory}
          selectedTournament={selectedTournament}
        />
      </div>
    </div>
  );
}
