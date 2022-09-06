import React,{useEffect, useState} from 'react'
import CreateCard from '../modals/CreateCard';
import Card from './Card';

const Placement = () =>{

    const [modal, setModal] = useState(false);
    const [cardList,setCardList] =useState([]);
    const toggle = () => {
        setModal(!modal);

     }
     useEffect(()=>{
        let arr = localStorage.getItem("cardList")
        if(arr){
            let obj=JSON.parse(arr)
            setCardList(obj)
        }
     },[])

     const saveCard= (cardObj) => {
        let tempList=cardList;
        tempList.push(cardObj);
        // in local storage can't store array directly so ned to convert JSON string 
        localStorage.setItem("cardList",JSON.stringify(tempList))
        setCardList(tempList);
        setModal(false);
     }


     const updateListArray = (cardObj, index) => {
        let tempList = cardList
        tempList[index] = cardObj
        localStorage.setItem("cardList", JSON.stringify(tempList))
        setCardList(tempList)
        window.location.reload()
    }

     const deleteCard=(index) =>{
            let tempList=cardList;
            tempList.splice(index,1);
            localStorage.setItem("cardList",JSON.stringify(tempList))
            setCardList(tempList);
            window.location.reload(true)

     }
    return(
        <>
        <div className='header text-center'>
                <h2 className='mt-3'>Placement Record!</h2>
                <button className='btn btn-success mt-3'  onClick={ ()=> setModal(true)}> Create Card</button>

        </div>

        <div className="card-container">
            {/* {cardList.map((obj)=><li>{obj.Name}</li> )} */}
            {cardList && cardList.map((obj,index) => <Card cardObj={obj} index={ index} deleteCard={deleteCard} updateListArray = {updateListArray}/>)}
        </div>
        <CreateCard modal={modal} toggle = {toggle} save={saveCard}  />
        </>
    );

};

export default Placement;