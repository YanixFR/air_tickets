import Sidebar from '../Sidebar/Sidebar'
import Filtration from '../Filtration/Filtration'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'

const Content = () => {
   return (
      <section className="content__page page">
         <div className="content__container container">
            <div className="content__body body">
               <div className="content__card">
                  <Sidebar/>
                  <Filtration/>
                  <Cards/>
                  <Button/>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Content