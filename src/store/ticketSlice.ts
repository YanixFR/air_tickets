import {createSlice} from "@reduxjs/toolkit";
import {Ticket} from "../mockData/mockType.ts";
import generateTestData from "../mockData/mock.ts";
import {IChange, ICompany, ICriteria} from "./filterSlice.ts";


export interface ITicketState {
    tickets: {
        tickets: Ticket[], 
        filtered: number[], 
        shown: number, 
    }
}

const initialState = {
    tickets: generateTestData(),
    filtered: [1, 2, 3],
    shown: 3,
}

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        filterTickets(state, action: {
            payload: {
                changes: IChange[],
                company: ICompany,
                criteria: ICriteria,
            }
        }) {
            const newState = {...state};

            newState.tickets = newState.tickets.sort(
                (a: Ticket, b: Ticket) => {
                    if (action.payload.criteria.value === 'cheapest') {

                        return a.price - b.price;
                    } else if (action.payload.criteria.value === 'fastest') {

                        return a.duration - b.duration;
                    } else if (action.payload.criteria.value === 'optimal') {

                        return a.connectionAmount - b.connectionAmount;
                    }
                    return 1;
                }
            );

            const changes: number[] = action.payload.changes.filter(
                (change) => change.selected
            ).map((change) => change.value);
            if (changes.length > 0) {
                newState.filtered = newState.tickets.filter(
                    (ticket: Ticket) => changes.includes(ticket.connectionAmount)
                ).filter(
                    (ticket) => ticket.company === action.payload.company.value
                ).map((ticket: Ticket) => ticket.id);
            } else {
                newState.filtered = newState.tickets.filter(
                    (ticket) => ticket.company === action.payload.company.value
                ).map((ticket: Ticket) => ticket.id);
            }

            state.tickets = newState.tickets
            state.filtered = newState.filtered;
            state.shown = 3;
        },
        loadMore(state) {
            state.shown += 3;
        }
    }
})

export default ticketSlice.reducer;

export const {filterTickets, loadMore} = ticketSlice.actions;
