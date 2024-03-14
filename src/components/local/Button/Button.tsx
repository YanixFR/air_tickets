import {useDispatch, useSelector} from "react-redux";
import {ITicketState, loadMore} from "../../../store/ticketSlice";

const Button = () => {
   const filtered = useSelector((state: ITicketState) => state.tickets.filtered);
   const shown = useSelector((state: ITicketState) => state.tickets.shown);
   const dispatch = useDispatch();
   const handleClick = () => {
      dispatch(loadMore());
   }

   return ( 
      <>
         {
            filtered.length > shown ?
            <div className="content__button">
               <button className="content__btn" onClick={handleClick}>Загрузить еще билеты</button>
            </div> :
            <></>
         }
      </>
      
   )
} 

export default Button