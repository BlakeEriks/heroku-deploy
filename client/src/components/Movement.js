const Movement = ({type, sets, _id, deleteMovement}) => {
    
    return (
        <div className="movement-item" >
            <a>
            {type} - {sets.length} Sets 
            </a>
            <button type="button" className="movement-delete" onClick={() => deleteMovement(_id)} >
                <i className="fas fa-times"></i>
            </button>
        </div>
    )
}

export default Movement