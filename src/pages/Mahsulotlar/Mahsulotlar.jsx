import "./Mahsulotlar.css"
import { Home } from "../../components/Home/Home"
import whiteLike from "../../assets/images/whiteLike.svg"
import AddIcon from "../../assets/images/Add_icon.svg"
import { NavLink } from "react-router-dom"
import Arrow from "../../assets/images/arrow.svg"
import { Footer } from "../../components/Footer"
import { useDispatch, useSelector } from "react-redux"
import { cardAsal,cardChoy,cardYog, shoppingAdd,AddShopingTavar,cardLike,tavarsLike } from "../BoshSahifa/ProductData"

export const Mahsulotlar=()=>{
    const dispetch=useDispatch();
    const {count}=useSelector((state)=>state.card);
    const {card}=useSelector((state)=>state.card);
    const {tavars}=useSelector((state)=>state.card);
    const {shopping}=useSelector((state)=>state.card)
    return(
       <>
        <div className="Mahsulotlar">
            <Home/>
        <div className="container">
           <div className="mt-4">
           <span className="span_texts">Bosh sahifa  / </span> <span className="span_text">Mahsulotlar</span>
           <div className="products">
            <h3 className="products_title">Mahsulotlar</h3>
            <div className="d-flex align-items-start gap-5">
            <form action="">
                <span className="d-flex mb-2"><input className="me-2 " type="checkbox" checked disabled /><p className="m-0">Hammasi</p></span>
                <span className="d-flex mb-2"><input onChange={()=>dispetch(cardChoy())} className="me-2 " type="checkbox" /><p className="m-0">Choy</p></span>
                <span className="d-flex mb-2"><input onChange={()=>dispetch(cardAsal())}  className="me-2 " type="checkbox" /><p className="m-0">Asal</p></span>
                <span className="d-flex mb-2"><input onChange={()=>dispetch(cardYog())}  className="me-2 " type="checkbox" /><p className="m-0">Yog’</p></span>
                <span className="d-flex mb-2"><input onChange={()=>dispetch(cardAsal())}  className="me-2 " type="checkbox" /><p className="m-0">Non</p></span>
                <span className="d-flex mb-2"><input onChange={()=>dispetch(cardYog())}  className="me-2 " type="checkbox" /><p className="m-0">Ziravorlar</p></span>
                <span className="d-flex mb-2"><input onChange={()=>dispetch(cardAsal())}  className="me-2 " type="checkbox" /><p className="m-0">Sharbatlar</p></span>
                <span className="d-flex mb-2"><input onChange={()=>dispetch(cardYog())}  className="me-2 " type="checkbox" /><p className="m-0">Lolipoplar</p></span>
                <span className="d-flex mb-2"><input onChange={()=>dispetch(cardChoy())}  className="me-2 " type="checkbox" /><p className="m-0">Tabletkalar</p></span>

            </form>
                {
                    tavars.length ? 
                    <ul>
                    <li className="list_items">
                        {
                           tavars.map((item) =>(
                            <div class="card mb-4 " style={{ width: "16rem" }}>
                            <div className="d-flex p-0 justify-content-between align-items-start">
                                <img className="w-75"  src={item[0].image} class="card-img-top" />
                                <button onClick={() => dispetch(tavarsLike({id: item.id }))} className="btn  border-0 w-100 p-1">
                                    <img    className="card_like " src={whiteLike} /></button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{item[0].title}</h5>
                                <p class="card-text">{item[0].true}</p>
                                <div className="card_price d-flex ">
                                    <div className="me-3" >
                                        <m className="discount"><s>{item[0].sale}</s></m><br />
                                        <m className="price">{item[0].price} uzs</m>
                                    </div>
                                    <button type="submit" onClick={()=>dispetch(AddShopingTavar({id:item.id}))} className="btn border-0 mb-2">
                                        <img src={AddIcon} />
                                    </button>
                                </div>
                                <NavLink to="/asasd" className="d-block text-center text-secondary text-decoration-none ">Tafsilotlar <img src={Arrow} /></NavLink>
                            </div>
                        </div>
                           )) 
                        }
                    </li>
        </ul>
                    : <ul>
                    <li className="list_items">
                        {
                           card.map((item) =>(
                            <div class="card mb-4 " style={{ width: "16rem" }}>
                            <div className="d-flex p-0 justify-content-between align-items-start">
                                <img className="w-75"  src={item.image} class="card-img-top" />
                                <button onClick={() => dispetch(cardLike({id: item.id }))} className="btn  border-0 w-100 p-1">
                                    <img  className="card_like " src={whiteLike} /></button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{item.title}</h5>
                                <p class="card-text">{item.true}</p>
                                <div className="card_price d-flex ">
                                    <div className="me-3" >
                                        <m className="discount"><s>{item.sale}</s></m><br />
                                        <m className="price">{item.price} uzs</m>
                                    </div>
                                    <button type="submit" onClick={()=>dispetch(shoppingAdd({id:item.id}))} className="btn border-0 mb-2">
                                        <img src={AddIcon} />
                                    </button>
                                </div>
                                <NavLink to="/asasd" className="d-block text-center text-secondary text-decoration-none ">Tafsilotlar <img src={Arrow} /></NavLink>
                            </div>
                        </div>
                           )) 
                        }
                    </li>
        </ul>
                }
            </div>
           </div>
           </div>
        </div>
        <Footer/>
        </div></>
    )
}