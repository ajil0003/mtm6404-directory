// Generates an HTML string of client list items
function list(clients) {
    return clients.map((client, index) => `
      <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name} <strong>$${client.balance.toFixed(2)}</strong>
      </li>
    `).join('');
  }
  
  // Sorts the clients array by a specified property
  function order(clients, property) {
    return [...clients].sort((a, b) => 
      (a[property] > b[property]) ? 1 : (a[property] < b[property]) ? -1 : 0
    );
  }
  
  // Calculates the total balance of all clients
  function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
  }
  
  // Finds and returns a client by index
  function info(index) {
    return clients.find(client => client.index === index) || null;
  }
  
  // Searches for clients whose names include the query (case-insensitive)
  function search(query) {
    return clients.filter(client => 
      client.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  