function Header() {
   return (
      <header className="header__page page">
         <div className="header__container container">
            <div className="header__body body">
               <div className="header__logo">
                  <img src="../img/header/logo-tickets.svg" alt="logo" className="header__logo-img" />
               </div>
               <div className="header__title">
                  <h1 className="header__title-h">
                     Поиск авиабилетов
                  </h1>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header