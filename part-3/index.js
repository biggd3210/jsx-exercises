const App = () => {
    return (
        <div>
            <Person name="Chadley" age={33} hobbies={[{id:1, text:"swimming"}, {id:2, text:"hiking"}]} />
            <Person name="Winston" age={29} hobbies={[{id:1, text:"painting"}, {id:2, text:"dancing"}]} />
            <Person name="Jess" age={13} hobbies={[{id:1, text:"reading"}, {id:2, text:"photography"}, {id: 3, text:"traveling"}]} />
        </div>
    )
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<App />);