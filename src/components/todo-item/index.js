
function TodoItem({index, todo}) {
    return (
                <li className= "list-group-item" key={index}>
                   < input
                        className="form-check-input me-1"
                        type="checkbox"
                        id={index}/>
                   <label
                        className="form-check-lablel"
                        for={index}
                    >{todo}</label>
                    {/*take home assignment: implement single delete */}
                    <button className= "btn btn-danger">delete</button>
                   </li>
                
            );}
        
export default TodoItem;
