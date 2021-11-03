const Movement = ({type, sets, _id, deleteMovement}) => {

    return (
        <div className="movement-item" >
            {type} - {sets?.length} Sets 
            <button type="button" className="movement-delete" onClick={() => deleteMovement(_id)} >
                <i className="fas fa-times"></i>
            </button>
        </div>
    )
}

export default Movement