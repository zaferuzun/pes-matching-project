import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultInput from '../Input/DefaultInput';

const StepX_TeamSelection3 = () => {
    // State tanımları
    const [teamOne, setTeamOne] = useState([]);
    const [teamSecond, setTeamSecond] = useState([]);
    
    const count = 4; // Context'ten gelecek
    const navigate = useNavigate();
    
    // Ref tanımları (Başlangıç değeri null olmalı)
    const teamOneDiv = useRef(null);
    const teamSecondDiv = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!teamOneDiv.current || !teamSecondDiv.current) {
            console.error("Form alanları henüz yüklenmedi.");
            return;
        }

        // --- TAKIM 1 VERİLERİNİ AL ---
        const teamOneInputs = teamOneDiv.current.querySelectorAll('input');
        // Boş inputları filtrelemek için .filter(val => val !== "") eklenecek
        const teamOneValues = Array.from(teamOneInputs).map(input => input.value);
        
        // --- TAKIM 2 VERİLERİNİ AL ---
        const teamSecondInputs = teamSecondDiv.current.querySelectorAll('input');
        const teamSecondValues = Array.from(teamSecondInputs).map(input => input.value);

        // 2. STATE GÜNCELLEME
        setTeamOne(teamOneValues);
        setTeamSecond(teamSecondValues);

        console.log("Takım 1:", teamOneValues);
        console.log("Takım 2:", teamSecondValues);

        // 3. NAVİGASYON (ÖNEMLİ!)
        // State güncellemesi anlık olmaz. Eğer navigate ile veri taşıyacaksanız
        // 'teamOne' state'ini değil, yukarıdaki 'teamOneValues' değişkenini kullanın.
        
        navigate('/teamSelectionSummary', { state: { teamOne: teamOneValues, teamSecond: teamSecondValues } });
        
    }

    return (
        <React.Fragment>
            {/* DÜZELTME: Style camelCase olmalı (marginLeft) */}
            <form style={{ marginLeft: "10%", marginTop: "2%" }} onSubmit={onSubmit}>
                <h1>Takımları oluşturunuz:</h1>
                <div className="container">
                    <div className="row">
                        <div ref={teamOneDiv} className="col" id="teamOne">
                            <h4>TAKIM 1</h4>
                            <DefaultInput name="teamOne"/>
                            {count > 2 && <DefaultInput name="teamOne"/>}
                        </div>
                        <div ref={teamSecondDiv} className="col" id="teamSecond">
                            <h4>TAKIM 2</h4>
                            <DefaultInput name="teamSecond"/>
                            {count > 3 && <DefaultInput name="teamSecond"/>}
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Devam Et</button>
            </form>
        </React.Fragment>
    )
}

export default StepX_TeamSelection3;