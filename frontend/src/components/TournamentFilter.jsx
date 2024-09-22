import React from "react";

function TournamentFilter({
  tournaments,
  selectedTournament,
  handleTournamentChange,
}) {
  return (
    <div>
      <label>Filter by Tournament: </label>
      <select
        value={selectedTournament}
        onChange={(e) => handleTournamentChange(e.target.value)}
      >
        <option value="">All Tournaments</option>
        {tournaments.map((tournament) => (
          <option key={tournament.id} value={tournament.id}>
            {tournament.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TournamentFilter;
