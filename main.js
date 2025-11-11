const tableBody = document.querySelector('#resultsTable tbody');
const searchBox = document.getElementById('searchBox');

function renderTable(data) {
  tableBody.innerHTML = '';
  if (data.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="4">No players found.</td></tr>';
    return;
  }
  data.forEach(player => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${player.rusher_player_name}</td>
      <td>${player.rusher_player_id}</td>
      <td>${Number(player.avg_yards_over_expected).toFixed(2)}</td>
      <td>${player.rush_count}</td>
    `;
    tableBody.appendChild(row);
  });
}

function filterPlayers() {
  const query = searchBox.value.trim().toLowerCase();
  const filtered = playerData.filter(player =>
    player.rusher_player_name.toLowerCase().includes(query)
  );
  renderTable(filtered);
}

searchBox.addEventListener('input', filterPlayers);

// Initial render
renderTable(playerData);
