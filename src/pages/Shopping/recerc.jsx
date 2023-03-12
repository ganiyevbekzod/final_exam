// import "./Shopping.css"
// import { Footer } from "../../components/Footer"
// import { Home } from "../../components/Home/Home"
// import {ShoppingNotFound} from "../../components/ShoppingNotFound/ShoppingNotFound"
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import DeleteBtn from '../../assets/images/deletebtn.svg'
// import { useDispatch, useSelector } from 'react-redux'
// export const Shopping=()=>{
//     const dispatch = useDispatch()
//     const {card} = useSelector((state) => state.card)
//     const {Shopping} = useSelector((state) => state.card)
//     const {cardDelete}=useSelector((state)=>state.card)
//     console.log(card);
//     const [count, setCount] = useState(1)
//     console.log(Shopping);
//     return (
// <>
// <div className='container'>
//             <Home/>
//           <div className='d-flex align-items-center justify-content-between my-5 '>
//             {
//               Shopping?.length?<h2>Savatchada {Shopping.length} ta mahsulot bor</h2> :<h2>Savatcha</h2>
//             }
//             <Link style={{ color: "#181725" }} className='buyurtma-history-btn' to='/history'>Buyurtmalar tarixi</Link>
//           </div>
//           {
//             Shopping?.length ?
//               <>
//                 <div className='d-flex align-items-start justify-content-between'>
//                   <div className='savatcha-item'>
    
//                     {
//                       Shopping.length ? <ul >{Shopping.map(item =>
//                         <li key={item.id} className='d-flex align-items-center justify-content-between savatcha-card mb-3'>
//                           <img src={item.image} width={90} height={90} />
//                           <div>
//                             <p className='medicine-name'>{item.title}</p>
//                             <p className='m-0'>{item.type}</p>
//                           </div>
//                           <div className='d-flex align-items-center '>
//                             <button onClick={() => dispatch(handleDecrement(item.id))} className='plus-btn'><Minus /></button>
//                             <p className='dori-soni'>{count}</p>
//                             <button onClick={() => dispatch(handleIncrement(item.id))} className='plus-btn'><Plus /></button>
//                           </div>
//                           <div className=''>
//                             <p className='old-price'>{item.sale}</p>
//                             <p className='new-price'>{item.price}</p>
//                           </div>
//                           <button onClick={() => dispatch(cardDelete(item.id))} type='button' className='plus-btn'><img src={DeleteBtn} /></button>
//                         </li>)}
//                       </ul> : ""
//                     }
    
//                   </div>
//                   <div className='common-balance' style={{ marginBottom: "441px" }}>
//                     <ul className='m-0 list-unstyled mb-4' >
//                       <li className='d-flex justify-content-between'>
//                         <p>Mahsulotlar({Shopping.length})</p>
//                         <p>{ }</p>
//                       </li>
//                       <li className='d-flex justify-content-between'>
//                         <p>Chegirma</p>
//                         <p>0</p>
//                       </li>
//                       <li className='d-flex justify-content-between'>
//                         <p>Yetkazib berish</p>
//                         <p>15 000</p>
//                       </li>
//                       <li className='d-flex justify-content-between'>
//                         <p>Umumiy</p>
//                         <p>197 000</p>
//                       </li>
//                     </ul>
//                     <Link to='/tolov' className='common-btn' style={{ color: "#FFF", marginBottom: "16px" }}>To’lovga o’tish</Link>
//                     <Link to='/mahsulotlar' className='common-btn common-btn2' style={{ color: "#181725" }}>Menyuga qaytish</Link>
//                   </div>
//                 </div></> : <ShoppingNotFound />
//           }
//         </div >
//         <Footer/>
//         </>
//       )
// }








