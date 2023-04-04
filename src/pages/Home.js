

const Home = () => {

    let user = null;

    if (process.env.REACT_APP_TOKEN_HEADER_KEY in localStorage) {
        
        const userData = localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY);

        user = JSON.parse(userData).user;
    }
    
    const welcomeMessage = user ? `, ${user}` : null;
        
    return <h1>Welcome to Blogs Home{welcomeMessage}!</h1>;
}
 
export default Home;