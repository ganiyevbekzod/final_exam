import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Shopping.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { productDeleteShopping, cardDel, cardAdd } from '../BoshSahifa/ProductData'
import deleteBtn from "../../assets/images/deletebtn.svg"
import arrow from "../../assets/images/Group.svg"
import MinusBtn from "../../assets/images/minus.svg"
import PlusBtn from "../../assets/images/plus.svg"
import { Home } from '../../components/Home/Home'
import { ShoppingNotFound } from '../../components/ShoppingNotFound/ShoppingNotFound'
import { Footer } from '../../components/Footer'
export const Shopping = () => {

    const navigaet = useNavigate()
    const dispatch = useDispatch()
    const { shopping } = useSelector((state) => state.card)
    const { count } = useSelector((state) => state.card)
    const Sum = shopping.map((item) => item[0].price * item[0].count)
    var counts = Sum.reduce((acc, cur) =>acc+cur,15000)
    const Summ=counts+15000
    if (shopping.length) {
        const DelProduct = (Id) => {
            const Delete_product = shopping.filter(el => el[0].id !== Id)
            console.log(Delete_product);
            dispatch(productDeleteShopping(Delete_product))
        }
        return (
            <div>
                <Home />
                <div className='container'>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                        <h2 className='shoping_title'>Savatchada {shopping.length} ta mahsulot bor</h2>
                        <NavLink className="shooping_link" to={'/Maxsulotlar'}>
                            Buyurtmalar tarixi <img className='ms-3' src={arrow} />
                        </NavLink>
                    </div>


                    <div className="Shop_content">
                        <div className=" d-flex gap-4 mt-5">
                            <ul className=' w-75'>
                                {
                                    shopping.map((item) =>
                                        <li className='addCard d-flex align-items-center justify-content-between p-4'>
                                            <img src={item[0].image} width='97' height={'97'} alt="dorilar" />
                                            <div className="">
                                                <h3 className='card_title fw-bold'>{item[0].title}</h3>
                                                <p className='itemtext'>{item[0].true}</p>
                                            </div>
                                            <div className="d-flex">
                                                <button onClick={() => dispatch(cardDel(item[0].id))} className='Btn_increment align-items-center me-2'><img src={MinusBtn} alt="minus" /></button>
                                                <h3 className='counst m-0 '>{item[0].count}</h3>
                                                <button onClick={() => dispatch(cardAdd(item[0].id))} className='Btn_decrement align-items-center ms-2'><img src={PlusBtn} alt="plus" /></button>

                                            </div>
                                            <div className="">
                                                <s className='shopping_sale'>{item[0].sale}</s>
                                                <h2 className='shooping_price'>{item[0].price} uzs</h2>
                                            </div>
                                            <button onClick={() => DelProduct(item[0].id)} type='button' className='border-0 bg-transparent'>
                                                <img src={deleteBtn} width='16' height={'18'} alt="delete" />
                                            </button>
                                        </li>
                                    )
                                }
                            </ul>
                            <div className="price_content shadow mb-6 pb-6">
                                <div className="  d-flex align-items-center justify-content-between">
                                    <h3 className='price_text'>Mahsulotlar ( {shopping.length} ) </h3>
                                    <p className='cards_text'>
                                        {Sum}uzs</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h3 className='cards_text'>Chegirma</h3>
                                    <p className='cards_text'>0</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h3 className='cards_text'>Yetkazib berish</h3>
                                    <p className='cards_text'>15000 uzs</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h3 className='cards_title'>Umumiy</h3>
                                    <p className='cards_title'>{Summ} uzs</p>
                                </div>

                                <button onClick={() => navigaet('/')} className='card_button'>To’lovga o’tish</button>
                                <button onClick={() => navigaet('/')} className='card_buttons'>Menyuga qaytish</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    else {
        return (
            <div>
                <Home />
                <ShoppingNotFound />
                <Footer/>
            </div>
        )
    }
}
