import Tickets from '../Ticket/Ticket'
import {useSelector, useDispatch} from "react-redux";
import {ITicketState, filterTickets} from '../../../store/ticketSlice';
import {IFilterState} from '../../../store/filterSlice';
import {useEffect} from "react";


export default function Cards() {
    const tickets = useSelector((state: ITicketState) => state.tickets.tickets);
    const filtered = useSelector((state: ITicketState) => state.tickets.filtered);
    const shown = useSelector((state: ITicketState) => state.tickets.shown);
    const changes = useSelector((state: IFilterState) => state.filter.changes);
    const company = useSelector((state: IFilterState) => state.filter.company);
    const criteria = useSelector((state: IFilterState) => state.filter.criteria);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterTickets({changes, company, criteria}));
    }, [changes, company, criteria, dispatch]);

    return (
        <div className="content__tikets">
            {tickets.filter((ticket) => filtered.includes(ticket.id)).slice(0, shown).map((ticket) => (
                <Tickets key={ticket.id} ticket={ticket}/>
            ))}

        </div>

    );
}