import {SyntheticEvent} from "react";
import {setFilter, IFilterState, setCompany} from "../../../store/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from 'react';

const Sidebar = () => {
   const changes = useSelector((state: IFilterState) => state.filter.changes);
   const company = useSelector((state: IFilterState) => state.filter.company);
   const dispatch = useDispatch();

   const handleCheckboxChange = (e: SyntheticEvent) => {
       dispatch(setFilter({
           value: Number((e.currentTarget as HTMLFormElement).value),
           selected: (e.currentTarget as HTMLFormElement).checked
       }));
   };

   const handleRadioChange = (e: SyntheticEvent) => {
       dispatch(setCompany({value: (e.currentTarget as HTMLFormElement).value, selected: true}));
   }

   const [sidebarCard, setSidebarCard] = useState(true);
   const [sidebarCardChange, setSitebarCardChange] = useState(false);

   const toggleSidebarCardChange = () => {
      setSitebarCardChange(!sidebarCardChange)
   }

   useEffect(() => {
      const handleWindowSizeChange = () => {
         if (window.innerWidth > 768) {
            setSidebarCard(!sidebarCard);
         } else {
            setSidebarCard(sidebarCard);
         }
      }
   
      window.addEventListener('resize', handleWindowSizeChange);
   
      return () => {
         window.removeEventListener('resize', handleWindowSizeChange);
      }
   });

   const selectedChanges = changes.filter(change => change.selected);

   return (
      <div className="content__sidebar">
         {!sidebarCard && (
         <>
            <div className="sidebar__selected">
               <div className="sidebar__title">
                  {selectedChanges.length === 0 ? (
                     <h2 className="sidebar__title-h" key="any-transfers">
                        Любое кол-во пересадок, 
                     </h2>
                  ) : (
                     selectedChanges.map((selected) => (
                     <h2 className="sidebar__title-h">
                        {`${selected.value} ${selected.value === 1 ? "пересадка," : "пересадки,"}`}                    
                     </h2>
                  ))
                  )}
               </div>
               <div className="sidebar__title">
                  {!company ? (
                     <h2 className="sidebar__title-h" key="any-transfers">
                        любая авиакомпания
                     </h2>
                  ) : (
                     <h2 className="sidebar__title-h" key="any-transfers">
                        {company.value === 'victory' ? 'Победа' : '' || company.value === 'redWings' ? 'Red Wings' : '' || company.value === 'S7' ? 'S7 Airlines' : ''}
                     </h2>
                  )}
               </div>
            </div>
            <div className="sidebar__acordeon">
               <div className="sidebar__acordeon-title"> 
                  <h2 className="acardeon__title">
                     Открыть настройки 
                  </h2>
               </div>
               <div className="header__profile-accordion">
                  <span  className={sidebarCardChange ? 'acordion-icon-active' : 'acordion-icon'} onClick={toggleSidebarCardChange}></span>
               </div>
            </div>
         </>
         )}
         {sidebarCard || sidebarCardChange ? (
            <>
               <div className="sidebar__card checkbox">
                  <div className="sidebar__card-title">
                     <h2 className="card__title">
                        Количество пересадок
                     </h2>
                  </div>
                  <form className="sidebar_card-checkbox">
                  <label className="checkbox" htmlFor={'nonStop'}>
                     <input type="checkbox" value={0} id={'nonStop'} checked={changes[0].selected} onChange={handleCheckboxChange}/>
                        Без пересадок        
                  </label>
                  <label className="checkbox" htmlFor={'1Change'}>
                     <input type="checkbox" value={1} id={'1Change'} checked={changes[1].selected} onChange={handleCheckboxChange}/>
                        1 пересадка      
                  </label>
                  <label className="checkbox" htmlFor={'2Change'}>
                     <input type="checkbox" value={2} id={'2Change'} checked={changes[2].selected} onChange={handleCheckboxChange}/>
                        2 пересадки    
                  </label>
                  <label className="checkbox" htmlFor={'3Change'}>
                     <input type="checkbox" value={3} id={'3Change'} checked={changes[3].selected} onChange={handleCheckboxChange}/>
                        3 пересадки    
                  </label>
                  </form>
               </div>
               <div className="sidebar__card radio">
                  <div className="sidebar__card-title">
                     <h2 className="card__title">
                        Компании
                     </h2>
                  </div>
                  <form className="sidebar_card-checkbox">
                     <label className="checkbox" htmlFor={'victory'}>
                        <input name={'company'} type="radio" value={'victory'} id={'victory'} checked={company.value === 'victory'} onChange={handleRadioChange}/>
                        Победа
                     </label>
                     <label className="checkbox" htmlFor={'redWings'}>
                        <input name={'company'} type="radio" value={'redWings'} id={'redWings'} checked={company.value === 'redWings'} onChange={handleRadioChange}/>
                        Red Wings
                     </label>
                     <label className="checkbox" htmlFor={'S7'}>
                        <input name={'company'} type="radio" value={'S7'} id={'S7'} checked={company.value === 'S7'} onChange={handleRadioChange}/>
                        S7 Airlines
                     </label>
                  </form>
               </div>
            </>
         ) : null}
      </div>
   )
}

export default Sidebar