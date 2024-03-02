const Home = () => {
    const handleLogOut = async () => {
        localStorage.setItem('isLoggedIn', 'false');
        window.location.reload();
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogOut}>
                Logout
            </button>
        </div>
    );
};

export default Home;