export const patientState = {
    patient:[]
};

export const patientReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PATIENT':
            const newPatient = {
                id:action.id,
                name: action.name,

            }
            const allPatients = [...state.patient];
            return {patient:allPatients};

        case 'REMOVE' :
            return state;

        default:
            return state;
    }
}