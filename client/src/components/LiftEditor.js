const LiftEditor = () => {
    return (
        <div class="lift-editor-panel">
            <div class="notepad">
                <h1 class="notepad-title">
                    Notepad Title
                </h1>
                <div class="notepad-content">
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