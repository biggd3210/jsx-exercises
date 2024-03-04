const Tweet = (props) => {
    const { username, name, date, message } = props;
    console.log(username, name, date, message);
    return (
        <div>
            <h3>Username: {username}</h3>
            <h4>Name: {name}</h4>
            <p>Date: {date}</p>
            <p>Tweet: {message}</p>
        </div>
    )
}