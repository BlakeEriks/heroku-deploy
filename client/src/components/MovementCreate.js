const MovementCreate = () => {
    return (
        <form>
            <fieldset className="movement-info">
                <legend className="highlight">Create a Movement</legend>
                <div className="movement-label">Movement Type:</div>
                <input type="text" name="type" className="movement-input"></input>
                <div className="movement-label">Sets:</div>
                <template>
                    <div>
                        <input type="text" name="weight[]" placeholder="0" className="set-input" /> lbs
                        <input type="text" name="reps[]" placeholder="0" className="set-input" /> reps
                    </div>
                </template>
                <button type="button" className="pink-on-white">+ Add Set</button>
            </fieldset>
            <button className="add-movement">Create Movement</button>
        </form>
    )
}

export default MovementCreate