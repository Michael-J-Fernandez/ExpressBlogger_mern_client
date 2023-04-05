const Home = () => {
  let name = null;

  if (process.env.REACT_APP_TOKEN_HEADER_KEY in localStorage) {
    const userData = localStorage.getItem(
      process.env.REACT_APP_TOKEN_HEADER_KEY
    );

    name = JSON.parse(userData).name;
  }

  const welcomeMessage = name ? `, ${name}` : null;

  return <h1>Welcome to Blogs Home{welcomeMessage}!</h1>;
};

export default Home;
