import "../css/Board.css";

function Board(props) {
    return(
        <div id='board'>
            <span>{props.no}</span>
            <span>{props.title}</span>
            <span>{props.writer}</span>
            <span>{props.write_date}</span>
            <span>{props.attach}</span>
            <span>{props.hits}</span>
        </div>
    )
}

export default Board;