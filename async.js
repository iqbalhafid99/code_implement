async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users[4]);
    return users;
  } catch (error) {
    console.error(error);
  }
}

getData();
