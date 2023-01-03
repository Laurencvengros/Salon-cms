export const addClient = (addClient) => {
  return fetch("/api/clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addClient),
  });
};


