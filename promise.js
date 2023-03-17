fetch("https://jsonplaceholder.typicode.com/userss")
  .then((response) => {
    if (!response.ok) {
      throw new Error("tidak merespon");
    }
    return response.json();
  })

  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("ada error", error);
  });
