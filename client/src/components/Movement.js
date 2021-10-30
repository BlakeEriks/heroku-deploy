const Movement = ({type, sets}) => {
    return (
        <div className="movement-item" >
            <a>
            {type} - {sets.length} Sets 
            </a>
            <button type="button" className="movement-delete">
                <i className="fas fa-times"></i>
            </button>
        </div>
    )
}

export default Movement