import victoryLogo from '../../../../public/img/card/pobeda.svg';
import s7Logo from '../../../../public/img/card/airlines.svg';
import redWingsLogo from '../../../../public/img/card/red.svg';
import {Ticket} from "../../../mockData/mockType";
import {formatTime} from "../../../utils/index";

type RouteCardProps = {
    ticket: Ticket
}

const companies: {[key: string]: {name: string, logo: string, alt: string}} = {
    victory: {
        name: 'victory',
        logo: victoryLogo,
        alt: "Победа",
    },
    redWings: {
        name: 'redWings',
        logo: redWingsLogo,
        alt: "Red Wings",
    },
    S7: {
        name: 'S7',
        logo: s7Logo,
        alt: "S7",
    },
}


export default function Tikets(props: RouteCardProps) {
   const {ticket} = props;

   return (
      <div className="tiket__body" >
         <div className="tiket__price">
            <h2 className="tiket__price-text">
               {ticket.price} Р
            </h2>
         </div>
         <div className="tiket__logo">
            <img src={companies[ticket.company].logo} alt={companies[ticket.company].alt} className="tiket__logo-img" />
         </div>
         <div className="tiket__time tiket__details">
            <div className="tiket__title">
               <h2 className="tiket__title-text">
                  SVO - LED
               </h2>
            </div>
            <div className="tiket__subtitle">
               <h2 className="tiket__subtitle-text">
                  {ticket.time.startTime} - {ticket.time.endTime}
               </h2>
            </div>
         </div>
         <div className="tiket__duration tiket__details">
            <div className="tiket__title">
               <h2 className="tiket__title-text">
                  В пути
               </h2>
            </div>
            <div className="tiket__subtitle">
               <h2 className="tiket__subtitle-text">
                  {formatTime(ticket.duration)}
               </h2>
            </div>
         </div>
         <div className="tiket__transplants tiket__details">
            <div className="tiket__title">
               <h2 className="tiket__title-text">
                  Пересадки
               </h2>
            </div>
            <div className="tiket__subtitle">
            {
               ticket.connectionAmount === 0 ?
                  <h2 className="tiket__subtitle-text">Без пересадок</h2> :
                  <h2 className="tiket__subtitle-text">
                     {ticket.connectionAmount} {ticket.connectionAmount === 1 ? "пересадка" : "пересадки"}
                  </h2>
               }
            </div>
         </div>
      </div>
   )
}