// We request a database instance.
const request = indexedDB.open("budgetDatabase", 1);

// This returns a result that we can then manipulate.
request.onsuccess = (event) => {
  console.log(request.result);
  console.log(request);
};
