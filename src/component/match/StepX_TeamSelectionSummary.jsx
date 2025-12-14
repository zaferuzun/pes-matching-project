import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const StepX_TeamSelectionSummary = () => {
    const location = useLocation();
    console.log(location.state.teamOne);

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div  className="col" id="teamOne">
                        <h4>TAKIM 1</h4>
                        {
                            location.state.teamOne && location.state.teamOne.map((personName)=>{
                                return <p>{personName}</p>
                            })
                        }
                    </div>
                    <div className="col" id="teamSecond">
                        <h4>TAKIM 2</h4>
                        {
                            location.state.teamSecond && location.state.teamSecond.map((personName)=>{
                                return <p key={personName}>{personName}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StepX_TeamSelectionSummary