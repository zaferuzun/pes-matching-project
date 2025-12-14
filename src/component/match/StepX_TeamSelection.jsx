import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import StepX_TeamSelection2 from './StepX_TeamSelection2';

const StepX_TeamSelection = () => {

    const [isRandomTeams, setRandomTeams] = useState(false);
    const [showTeamSelection, setShowTeamSelection] = useState(false);

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const selectedSize = formData.get('teamSelectionRadios');

        console.log(e.target.value);
        setRandomTeams(selectedSize);
        setShowTeamSelection(true);
    }

    return (
        <React.Fragment>
            <form style={{ "margin-left": "10%", "margin-top": "2%" }} onSubmit={onSubmit}>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="teamSelectionRadios" value={false} />
                    <label className="form-check-label" >
                        Takım random oluştur:
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="teamSelectionRadios" value={true} />
                    <label className="form-check-label" >
                        Takımım hazır ?
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Primary</button>
            </form>
            <h1>Seçilen sayı</h1>
            <h2>{isRandomTeams}</h2>
             {
                showTeamSelection && <StepX_TeamSelection2  isRandomTeams={isRandomTeams}/>
            }
        </React.Fragment>
    )
}

export default StepX_TeamSelection;