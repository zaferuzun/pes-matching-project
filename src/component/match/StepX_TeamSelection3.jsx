import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const StepX_TeamSelection3 = () => {

    const [personSize, setPersonSize] = useState(false);
    const [showTeamSelection, setShowTeamSelection] = useState(false);
    const [personNames, setPersonNames] = useState([]);
    const count = 4; //contexten alınacak
    const inputs = [] ;
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = formData.getAll('personName');
        setPersonNames(values);
    }

    // Klasik for döngüsü burada çalışır
    for (let i = 0; i < count; i++) {
        inputs.push(
        <div className="input-group mb-3" key={i}>
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">@</span>
            </div>

            <input type="text" className="form-control" name ="personName" aria-label="Text input" />
        </div>
        );
    }    

    return (
        <React.Fragment>
            <form style={{ "margin-left": "10%", "margin-top": "2%" }} onSubmit={onSubmit}>
                <h1>Kişi isimlerini giriniz. Bu isimler ile random takımlar oluşturulacak</h1>
                <div>
                    {inputs}
                </div>
                <button type="submit" className="btn btn-primary">Primary</button>
            </form>
        </React.Fragment>
    )
}

export default StepX_TeamSelection3;