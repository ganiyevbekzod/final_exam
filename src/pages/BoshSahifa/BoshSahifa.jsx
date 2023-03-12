import { Home } from "../../components/Home/Home"
import doktor from "../../assets/images/doktor.png"
import Consultant from "../../assets/images/left.png"
import servic from "../../assets/images/right.png"
import Icon1 from "../../assets/images/Icon1.svg"
import Icon2 from "../../assets/images/Icon2.svg"
import Icon3 from "../../assets/images/Icon3.svg"
import Icon4 from "../../assets/images/Icon4.svg"
import AddIcon from "../../assets/images/Add_icon.svg"
import Arrow from "../../assets/images/arrow.svg"
import CardLike from "../../assets/images/card_like.svg"//qizil yurak
import whiteLike from "../../assets/images/whiteLike.svg"
import stark from "../../assets/images/stark.svg"
import MinusBtn from "../../assets/images/minus.svg"
import PlusBtn from "../../assets/images/plus.svg"
import Group from "../../assets/images/Group.svg"
import ImgHome from "../../assets/images/img_home.svg"
import contactForm from "../../assets/images/Contactform.svg"
import uzb from "../../assets/images/Rectangle 11.svg"
import formarrow from "../../assets/images/formarrow.svg"
import logoSection from "../../assets/images/LogoSection.svg"
import "../BoshSahifa/BoshSahifa.css"
import { NavLink } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { useDispatch, useSelector } from "react-redux"
import { shoppingAdd,homemodal,cardLike,cardDel,cardAdd  } from "./ProductData"
export const BoshSahifa = () => {
    const dispetch = useDispatch();
    const { count } = useSelector((state) => state.card);
    const {madal}=useSelector((state)=>state.card)
    const { card } = useSelector((state) => state.card)
    const { shopping } = useSelector((state) => state.card);
    console.log(madal);
    
    return (
        <div className="bosh_sahifa">
            < Home />
            <div className="container">
                <div className="sahifa_wrapper">
                    <p className="sahifa_title mx-auto">Bepul shifokor maslahat kerakmi?</p>
                    <p className="sahifa_subtitle mx-auto">24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq<br />
                        Faqat <u className="subtitle_color">mobil ilovada</u>
                    </p>
                    <div className="about">
                        <img className="doctor_img" src={doktor} />
                        <img className="Consultant_img" src={Consultant} />
                        <img className="servic_img" src={servic} />
                    </div>
                    <div className="delivery">
                        <ul className="delivery_list">
                            <li className="delivery_item">
                                <img className="me-2" src={Icon1} />
                                <div>
                                    <strong className="delivery_title">Yetkazib berish bepul</strong>
                                    <p className="delivery_text ">100 000 so'mdan ortiq <br />
                                        buyurtma berganingizda</p>
                                </div>
                            </li>
                            <li className="delivery_item">
                                <img className="me-2" src={Icon2} />
                                <div>
                                    <strong className="delivery_title">Tez to'lov</strong>
                                    <p className="delivery_text">100% xavfsiz to'lov</p>
                                </div>
                            </li>
                            <li className="delivery_item">
                                <img className="me-2" src={Icon3} />
                                <div>
                                    <strong className="delivery_title">Doimiy chegirmalar</strong>
                                    <p className="delivery_text">Ular allaqachon ishlamoqda</p>
                                </div>
                            </li>
                            <li className="delivery_item">
                                <img className="me-2" src={Icon4} />
                                <div>
                                    <strong className="delivery_title">Onlayn yordam</strong>
                                    <p className="delivery_text">Ish vaqti: 08:00 - 18:00</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul>
                        <li className="list_items">
                            {
                                card.map((item) => (
                                    <div class="card mb-4 " style={{ width: "16rem" }}>
                                        <div className="d-flex p-0 justify-content-between align-items-start">
                                            <img src={item.image} class="card-img-top" />
                                            <button onClick={() => dispetch(cardLike({ id: item.id }))} className="btn  border-0 w-25"><img className="card_like" src={whiteLike} /></button>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">{item.title}</h5>
                                            <p class="card-text">{item.true}</p>
                                            <div className="card_price d-flex ">
                                                <div className="me-3" >
                                                    <m className="discount"><s>{item.sale}</s></m><br />
                                                    <m className="price">{item.price} uzs</m>
                                                </div>
                                                <button onClick={() => dispetch(shoppingAdd({ id: item.id }))} className="btn border-0 mb-2">
                                                    <img src={AddIcon} />
                                                </button>
                                            </div>

                                            <button onClick={()=> dispetch(homemodal({id:item.id}))} className="btnsingle d-block text-center text-secondary text-decoration-none " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Tafsilotlar <img src={Arrow} />
                                            </button>
                                            {
                                                card.map((item)=>
                                                <div class="modal fade modale" id="exampleModal" tabindex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header ">
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            
                                                            <div className="d-flex">
                                                                <img src={item.image} />
                                                                <div className="mt-3">
                                                                    <h3 class="modal-title  fs-5 m-0 align-items-start" id="exampleModalLabel">{item.title}</h3>
                                                                    <img src={stark} alt="image" />
                                                                    <div className="d-flex mt-3 align-items-center">
                                                                        <div className="count_content d-flex">
                                                                            <button onClick={() => dispetch(cardDel(item.id))} className='Btn_increment align-items-center me-4'><img src={MinusBtn} alt="minus" /></button>
                                                                            <h3 className='counst m-0 '>{item?.count}</h3>
                                                                            <button onClick={() => dispetch(cardAdd(item.id))} className='Btn_decrement align-items-center ms-4'><img src={PlusBtn} alt="plus" /></button>
                                                                        </div>
                                                                        <h3 className="text-success modal_title ">{item.price} uzs</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                                                <div class="accordion-item">
                                                                    <h2 class="accordion-header" id="flush-headingOne">
                                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                            <h6>Mahsulot haqida</h6>
                                                                        </button>
                                                                    </h2>
                                                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                                        <div class="accordion-body">Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi</div>
                                                                    </div>
                                                                </div>
                                                                <div class="accordion-item">
                                                                    <h2 class="accordion-header" id="flush-headingTwo">
                                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                            <h6>Og’irligi</h6>
                                                                        </button>
                                                                    </h2>
                                                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                                        <div class="accordion-body"><span>100 gr</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-danger buttonsave border-0" data-bs-dismiss="modal">Close</button>
                                                            <button onClick={() => dispetch(shoppingAdd({ id: item.id }))} type="button" class="buttonsave btn btn-success">Savatga qo'shish</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                            }
                 

























                                        </div>
                                    </div>
                                ))
                            }
                        </li>
                    </ul>



















                    <button class="button_link border-0 "><NavLink to="/efwefew" className="text-black text-decoration-none " >Barcha mahsulotlarni ko’rish <img className="ms-3" src={Group} /> </NavLink></button>
                    <img className="home_img" src={ImgHome} />
                </div>
                <div className="quiz">
                    <p className="quiz_title" >Ko’p so'raladigan savollar</p>
                    <p className="quiz_subtitle">Qo'shimcha ma'lumot uchun <br />
                        biz bilan bog'laning</p>
                    <div className="d-flex align-items-start justify-content-between">
                        <button class="button_link border-0 "><NavLink to="/wefwe" className="text-black text-decoration-none " >Batafsil<img className="ms-3" src={Group} /></NavLink></button>
                        <div class="accordion  " id="accordionExample">
                            <div class="accordion-item border border-0 border-bottom">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span className="accordion_span">01</span>
                                        <p className="accordion_title">Какой состав сока Alatoo?</p>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border border-0 border-bottom">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span className="accordion_span">02</span>
                                        <p className="accordion_title">Сколько стоит Алатоо и сколько стоит доставка?</p>
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border border-0 border-bottom">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <span className="accordion_span">03</span>
                                        <p className="accordion_title">Здравствуйте, аллергия часто на этот сок?</p>
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border border-0 border-bottom">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <span className="accordion_span">04</span>
                                        <p className="accordion_title">Эффективен ли сок Алатоо при часто рецидивирующем герпесе?</p>
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border border-0 border-bottom">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <span className="accordion_span">05</span>
                                        <p className="accordion_title">Здравствуйте, можно ли принимать при полипе в жёлчном пузыре?</p>
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="userForm d-flex align-items-center ">
                    <img className="me-5" src={contactForm} />
                    <div>
                        <h6 className="quiz_subtitle">
                            Biz bilan bog'lanish
                        </h6>
                        <h3 className="form_title">
                            So'rovingizni yuboring
                        </h3>
                        <form>
                            <input className="form-control border-0 border-bottom mt-4" placeholder="Mahmud" type="text" />
                            <input className="form-control border-0 border-bottom mt-4" placeholder="nmahmud0928@gmail.com" type="mail" />
                            <label className="d-block mt-4">
                                <span className="form_span">
                                    Telefon raqam
                                </span>
                                <div className="d-flex align-items-center ">
                                    <img className="form_img" src={uzb} />
                                    <input className="form-control border-0 border-bottom " type="phone" />
                                </div>
                            </label>
                            <button className="formbutton text-black border-0  mt-4" type="submit">
                                Xabar yuborish<img src={formarrow} />
                            </button>
                        </form>
                    </div>
                </div>
                <img className="mt-5" src={logoSection} />

            </div>
            <Footer />
        </div>
    )
}