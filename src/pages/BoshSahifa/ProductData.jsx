import { createSlice } from "@reduxjs/toolkit";
import Mehrigiyoh from "../../assets/images/mehrigiyoh.svg"
import OrganicBanans from "../../assets/images/organicBanans.svg"
import rohatChoy from "../../assets/images/rohat_siropi.svg"
import rohatSirop2 from "../../assets/images/rohat_yogi_formen.svg"
import  RohatSirop from "../../assets/images/rohat_siropi1.svg"
 const cardSlise = createSlice({
    name: 'card',
    initialState:
    {
        count: 1,
        shopping: [],
        madal:[],
        cardAd: [],
        tavars: [],
        card: [
            {
                id: 1,
                typeId:1,
                image: Mehrigiyoh,
                title: 'ROHAT Yog`i №2',
                true: 'Mavjud',
                sale:"17,190, uzs",
                price:16000,
                count: 1

            },
            {
                id: 2,
                typeId:2,
                image: RohatSirop,
                title: 'Rohat Sirop',
                true: 'Erkaklar kuchi',
                sale: '200,190, uzs',
                price: 150000,
                count: 1

            },
            {
                id: 3,
                typeId:3,
                image: OrganicBanans,
                title: 'Organic Bananas',
                true: '7pcs, Price',
                sale: '17,190, uzs',
                price: 16000,
                count: 1

            },
            {
                id: 4,
                typeId:4,
                image: rohatSirop2,
                title: 'ROHAT Yog`i №22',
                true: 'Mavjud',
                sale: '17,190, uzs',
                price: 16000,
                count: 1

            },
            {
                id: 5,
                typeId:5,
                image: rohatChoy,
                title: 'Rohat Sirop',
                true: 'Erkaklar kuchi',
                sale: '200,190, uzs',
                price: 150000,
                count: 1

            },
        ]
    }
    ,
    reducers: {
        ///////////////////////////////////////////////////LIKE//////////////////////////////////////////
        cardLike(state, action) {
            const Addcard = state.card.filter((Add) => Add.id === action.payload.id)
            
        
            const AdcardOpen = Addcard.flat()
            state.cardAd.push(AdcardOpen)
            
        },
        tavarsLike(state,action){
            const Tavarscard = state.tavars.filter((Add) => Add.id === action.payload.id)
            const AddTavarsOpen=Tavarscard.flat()
            state.cardAd.push(AddTavarsOpen)
        },
        shoppingAdd(state, action) {
            const AddShoping = state.card.filter(Add => Add.id === action.payload.id)
        state.shopping.push(AddShoping)
        },
        shoppingAddTavars(state, action) {
            const AddShopingTavar = state.tavars.filter(Add => Add.id === action.payload.id)
        state.shopping.push(AddShopingTavar)
        },

        productDeleteLike: (state, action) => {
            state.cardAd = action.payload
            
         
        },
        productDeleteShopping:(state,action)=>{
            state.shopping=action.payload
        },

        cardAdd(state, action) {
            state.count += 1
            state.shopping.find((el) => el[0].id === action.payload ? el[0].count += 1 : '')
        },
        cardDel: (state, action) => {
            state.count -= 1
            state.shopping.find((el) => el[0].id === action.payload ? el[0].count -= 1 : '')



        },
        homemodal(state,action){
            const modalFilter = state.card.filter((el) => el.id === action.payload)

            state.madal.push(modalFilter)
        },
        cardFilter(state, action) {

            const Filterad = state.card.filter((fil) => fil.id !== 3)

            const Bce = Filterad.flat()
            state.tavars.push(Bce)
        },
        cardChoy(state, action) {
            const Filterad = state.card.filter((fil) => fil.title === 'Organic Bananas')
            const Choy = Filterad.flat()
            state.tavars.push(Choy)
        },
        cardAsal(state, action) {
            const FilteradYog = state.card.filter((fil) => fil.title === 'ROHAT Yog`i №22')
            const asal = FilteradYog.flat()
            state.tavars.push(asal)
        },
        cardYog(state, action) {

            const FilteradYog = state.card.filter((fil) => fil.title === 'ROHAT Yog`i №2')
            const Choy = FilteradYog.flat()
            state.tavars.push(Choy)
        },


    },

});


export const { cardAdd, cardDel, cardFilter,homemodal, cardChoy, cardYog, cardLike,tavarsLike, cardDelete,AddShopingTavar, shoppingAdd,productDeleteLike,productDeleteShopping, cardAsal } = cardSlise.actions;
export default cardSlise.reducer;
