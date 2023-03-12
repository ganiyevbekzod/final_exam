import { useDispatch, useSelector } from "react-redux"
import "./ShoopingPrice.css"
export const ShoopingPrice=()=>{
    const dispatch = useDispatch()
    const { shopping } = useSelector((state) => state.card)
    const { count } = useSelector((state) => state.card)
    const Sum = shopping.map((item) => item.prise * item.count)
    var Summ = Sum.reduce((acc, cur) => acc + cur)
    const bcecounts = Summ + 1500
    return(
        <>
        <ul>
        {
            shopping[0].map((item)=>
                    <div className="price_content shadow">
              <div className="  d-flex align-items-center justify-content-between">
                <h3 className='price_text'>Mahsulotlar ( {shopping.length} ) </h3>
                <p className='cards_text'>
                   {item.price*item.count}uzs</p>
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
                <p className='cards_title'>{item.price*item.count+1500} uzs</p>
              </div>

              <button onClick={() => navigaet('/log')} className='card_button'>To’lovga o’tish</button>
              <button onClick={() => navigaet('/')} className='card_buttons'>Menyuga qaytish</button>
            </div>
            )
        }
        </ul>
        </>
    )
}