const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Derek" />
        </div>
    );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
