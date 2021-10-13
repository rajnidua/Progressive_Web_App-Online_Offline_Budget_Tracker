let db;

// We request a database instance.
const request = indexedDB.open("budgetDatabase", 1);

// Create an object store inside the onupgradeneeded method.
request.onupgradeneeded = ({ target }) => {
  const db = target.result;
  const objectStore = db.createObjectStore("budgetDatabase");
  console.log(objectStore);
};

// This returns a result that we can then manipulate.
request.onsuccess = (event) => {
  console.log(request.result);
  console.log(request);
};
