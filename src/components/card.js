
const Card = (props) => {
    return (
        <div className="card">
            <p>{props.taskName}</p>
            <button onClick={() => props.completeTaskHandler(props.id)}>Complete</button>
        </div>
    )
}

export default Card;
