import {useDispatch, useSelector} from "react-redux";
import {SyntheticEvent} from "react";
import {setCriteria, IFilterState} from "../../../store/filterSlice";

const Filtration = () => {
   const criteria = useSelector((state: IFilterState) => state.filter.criteria);
   const dispatch = useDispatch();
   const handleRadioChange = (e: SyntheticEvent) => {
      dispatch(setCriteria({value: (e.currentTarget as HTMLFormElement).value}));
   }

   return (
      <div className="RadioSelect">
            <input className="RadioSelect__input" type="radio"
                   name={"criteria"}
                   value={"cheapest"} id={"cheapest"}
                   onChange={handleRadioChange}
                   checked={criteria.value === "cheapest"}
            />
            <label htmlFor={"cheapest"}
                   className="RadioSelect__item">

                Самый дешевый</label>
            <input className="RadioSelect__input" type="radio"
                   name={"criteria"}
                   value={"fastest"} id={"fastest"}
                   onChange={handleRadioChange}
                   checked={criteria.value === "fastest"}
            />
            <label htmlFor={"fastest"}
                   className="RadioSelect__item">

                Самый быстрый</label>
            <input className="RadioSelect__input" type="radio"
                   name={"criteria"}
                   value={"optimal"} id={"optimal"}
                   onChange={handleRadioChange}
                   checked={criteria.value === "optimal"}
            />
            <label htmlFor={"optimal"}
                   className="RadioSelect__item">

                Самый оптимальный</label>
        </div>
   )
}

export default Filtration