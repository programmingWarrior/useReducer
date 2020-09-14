import React from 'react';
import { useRef } from 'react';
import { useReducer } from 'react';
import { patientReducer, patientState } from './Reducer/Reducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state,dispatch] = useReducer(patientReducer, patientState);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT', 
            name: nameRef.current.value, id: state.patient.value+1,
        });
        
       nameRef.current.value = '';
       
    };

    return (
        <div>
            <h1>Patient Management:{state.patient.length}</h1>
            <form onSubmit={handleSubmit} action="">
                <input type="text" ref={nameRef}/>
            </form>
        </div>
    );
};

export default PatientManagement;