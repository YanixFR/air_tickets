import {createSlice} from "@reduxjs/toolkit";


export interface IChange {
    value: number,
    label: string,
    selected: boolean,
}

export interface ICompany {
    value: string,
    selected: boolean,
}

export interface ICriteria {
    value: string,
}

export interface IFilterState {
    filter: {
        changes: IChange[], 
        company: ICompany,
        criteria: ICriteria, 
    }
}

const initialState: { changes: IChange[], company: ICompany, criteria: ICriteria } = {
    changes: [
        {
            value: 0,
            label: 'Без пересадок',
            selected: false,
        },
        {
            value: 1,
            label: '1 пересадка',
            selected: false,
        },
        {
            value: 2,
            label: '2 пересадки',
            selected: false,
        },
        {
            value: 3,
            label: '3 пересадки',
            selected: false,
        },
    ],
    company: {
        value: 'victory',
        selected: true,
    },
    criteria: {
        value: 'cheapest',
    }
}


const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setFilter: (state, action) => {
            const newState = {...state};
            newState.changes[action.payload.value] = {
                value: action.payload.value,
                label: newState.changes[action.payload.value].label,
                selected: action.payload.selected,
            };
            state.changes = newState.changes;
        },
        setCompany: (state, action) => {
            const newState = {...state};
            newState.company = action.payload;
            state.company = newState.company;
        },
        setCriteria: (state, action) => {
            const newState = {...state};
            newState.criteria = action.payload;
            state.criteria = newState.criteria;
        }
    }
})

export default filterSlice.reducer;
export const {setFilter, setCompany, setCriteria} = filterSlice.actions;
