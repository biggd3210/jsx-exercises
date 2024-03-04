const App = () => {
    return (
        <div>
            <Tweet username="u1" name="n1" date="1-1-24" message="This is my first tweet" />
            <Tweet username="u2" name="n2" date="1-2-24" message="Welcome to the site!" />
            <Tweet username="u3" name="n3" date="3-4-24" message="That thread died quickly." />
        </div>
    );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);