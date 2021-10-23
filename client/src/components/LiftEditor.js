const LiftEditor = () => {
    return (
        <div className="lift-editor-panel">
            <div className="notepad">
                <h1 className="notepad-title">
                    Notepad Title
                </h1>
                <div className="notepad-content">
                    {/* if lift */}
                    {/* Movement Index */}

                    {/* else */}
                    <button>    
                    Button Click For Create Lift
                    </button>
                    {/* <%- include('../partials/notepadButton', {request: "POST", queryUrl: `/lifts?date=${date.toLocaleDateString("en-US")}`, label: "Create Lift", className: ''}) %> */}
                </div>
            </div>
        </div>
    )
}

export default LiftEditor