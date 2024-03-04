const Person = ({ name, age, hobbies }) => {

    let ageMsg = ""
    if (age >= 18) {
        ageMsg = " please go vote!";
    } else if (age <= 18) {
        ageMsg = " you must be 18";
    }
    let displayName = (name.length > 6) ? name.slice(0, 6) : name;
    if (hobbies) {
        return (
            <div>
            <p>Learn some information about this person</p>
            <h3>{displayName}, {ageMsg}</h3>
            <h5>Hobbies</h5>
            <ul>
                { hobbies.map(h => <li key={h.id}> {h.text}</li>) }
            </ul>
            </div>
        )
    }
    return (
        <div>
        <p>Learn some information about this person</p>
        <h3>{displayName}, {ageMsg}</h3>
        </div>
    )
}