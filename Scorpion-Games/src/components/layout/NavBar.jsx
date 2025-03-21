import { Outlet, Link } from "react-router-dom"
import style from "./navBar.module.css"

const NavBar = ()=>{
    return(
        <>
            <nav className={style.navbar}>
                    <img src="./src/assets/submk.png" alt="Subzero MK9" className={style.subzero}/>
                <div className={style.list}>
                    <Link to='/newGame'>
                        <div className={style.item}>CADASTRAR JOGOS</div>
                    </Link>
                    <Link to='/listGame'>
                        <div className={style.item}>LISTAR JOGOS</div>
                    </Link>
                <Link to='/cadastro'>
                        <div className={style.item}>CADASTRAR USUARIOS</div>
                    </Link>
                    <Link to='login'>
                        <div className={style.item}>LOGIN</div>
                    </Link>
                </div>
                <Link to='/'>
                <img src="./src/assets/ScorpionGames.png" alt="Nome da loja" className={style.logo}></img>
                        </Link>
                <img src="./src/assets/mks.png" alt="Scorpion MK9" className={style.scorpion}></img>
            </nav>
            <Outlet/>
        </>
    )
}

export default NavBar