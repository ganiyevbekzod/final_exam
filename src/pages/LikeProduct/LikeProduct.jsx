import { useDispatch, useSelector } from "react-redux"
import deleteBtn from "../../assets/images/deletebtn.svg"
import AddIcon from "../../assets/images/Add_icon.svg"
import { Footer } from "../../components/Footer"
import { Home } from "../../components/Home/Home"
import { ShoppingNotFound } from "../../components/ShoppingNotFound/ShoppingNotFound"
import { shoppingAdd,productDeleteLike } from "../BoshSahifa/ProductData"
import "./LikeProduct.css"
export const LikeProduct=()=>{

    const dispatch = useDispatch()
    const { shopping } = useSelector((state) => state.card)
    const { count } = useSelector((state) => state.card)
    const { cardAd } = useSelector((state) => state.card)
  
    const DelProduct =(Id)=>{
      const Delete_product = cardAd.filter(el => el[0].id !== Id)
      dispatch(productDeleteLike(Delete_product))
    }
    
    if(cardAd.length)
        {
      return(
        <div>
        <Home />
        <div className='container'>
        <h2 className='shoping_title mt-3'>Sevimli mahsulotlar </h2>
            <div className="Shop_content">
                <div className=" d-flex gap-4 mt-5">
                    <ul className=' w-75'>
                        {
                            
                            cardAd.map((item) =>
                            
                                <li key={item.id} className='addCard d-flex align-items-center justify-content-between p-4'>
                                    <img src={item[0].image} width='97' height={'97'} alt="dorilar" />
                                    <div className="">
                                        <h3 className='card_title fw-bold'>{item[0].title}</h3>
                                        <p className='itemtext'>{item[0].true}</p>
                                    </div>
                                    <button onClick={() => dispatch(shoppingAdd({ id: item[0].id }))} className="btn border-0 mb-2">
                                            <img src={AddIcon} />
                                        </button>
                                    <div className="">
                                        <s className='shopping_sale'>{item[0].sale}</s>
                                        <h2 className='shooping_price'>{item[0].price} uzs</h2>
                                    </div>
                                    <button onClick={()=>DelProduct(item[0].id)} type='button' className='border-0 bg-transparent'>
                                        <img src={deleteBtn} width='16' height={'18'} alt="delete" />
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
      )
    }
    else{
       return(
        <>    <Home/>
        <div className="container">
        <div className="mt-4">
           <span className="span_texts">Bosh sahifa  / </span> <span className="span_text">Mahsulotlar</span>
           <div className="products">
            <h3 className="products_title">Sevimli dorilar</h3>
            <ShoppingNotFound/>
        </div>
        </div>
        </div>
        <Footer/></>
       )
    }

}