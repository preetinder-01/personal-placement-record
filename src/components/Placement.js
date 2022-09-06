import React,{useState} from 'react'
import CreateCard from '../modals/CreateCard';

const Placement = () =>{

    const [modal, setModal] = useState(false);
    const [cardList,setCardList] =useState([]);
    const toggle = () => {
        setModal(!modal);

     }
     const saveCard= (cardObj) => {
        let tempList=cardList;
        tempList.push(cardObj);
        setCardList(tempList);
        setModal(false);
     }
    return(
        <>
        <div className='header text-center'>
                <h2 className='mt-3'>Placement Record!</h2>
                <button className='btn btn-success mt-3'  onClick={ ()=> setModal(true)}> Create Card</button>

        </div>

        <div className="container">
            {cardList.map((obj)=><li>{obj.Name}</li> )}
        </div>
        <CreateCard modal={modal} toggle = {toggle} save={saveCard}  />
        </>
    );

};

export default Placement;