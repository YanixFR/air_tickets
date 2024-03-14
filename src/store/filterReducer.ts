import {createAction, createReducer} from "@reduxjs/toolkit";

interface IChange {
    value: number,
    label: string,
    selected: boolean,
}

interface ICompany {
    value: string,
    label: string,
    selected: boolean,
}

const initialState:{changes: IChange[], company: ICompany} = {
    changes: [
        {
            value: 0,
            label: 'Без пересадок',
            selected: true,
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
        label: 'Победа',
        selected: true,
    }
}

const setChange = createAction<IChange[]>("setChanges");
const setCompany = createAction<ICompany>("setCompany");

const filterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setChange, (state, action) => {
            return {
                ...state,
                changes: action.payload,
            };
        })
        .addCase(setCompany, (state, action) => {
            return {
                ...state,
                company: action.payload,
            };
        });
});

export default filterReducer;
