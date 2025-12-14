import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import StepX_TeamSelection3 from './StepX_TeamSelection3';
import StepX_TeamSelection4 from './StepX_TeamSelection4';


const StepX_TeamSelection2 = ({isRandomTeams}) => {
    console.log(isRandomTeams);
    return (
        <React.Fragment>
        {isRandomTeams === "true" || isRandomTeams === true ? (
            <StepX_TeamSelection4 />
        ) : (
            <StepX_TeamSelection3 />
        )}

        </React.Fragment>
    )
}

export default StepX_TeamSelection2;