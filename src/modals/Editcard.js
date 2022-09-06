import React,{useState,useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditCard = ({modal,toggle,updateCard,cardObj}) => {
const [cardName,setCardName] =useState('');
const [description,setDescription] =useState('');

const handleChange=(e) =>{
  const {name, value} = e.target

        if(name === "cardName"){
          
            setCardName(value)
        }else{
            setDescription(value)
        }
}



useEffect(()=>{
    setCardName(cardObj.Name)
    setDescription(cardObj.description)
},[cardObj.Name,cardObj.description])

const handleUpdate = () => {
    // e.preventDefault();
    let tempObj = {}
    tempObj["Name"] = cardName
    tempObj['description'] = description
    updateCard(tempObj)
}

// [cardObj.Name,cardObj.description]


    return (
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Update Details</ModalHeader>
        <ModalBody>
          
            <div className="form-group p-2">
              <label > Company Name</label>
              <input type="text" className='form-control'  value={cardName} onChange={handleChange} name='cardName'/>
            </div>
            <div className="form-group  p-2">
              <label htmlFor="" className='pt-2 pb-1 '>Details</label>
              <textarea name="description" id=""  cols="23" rows="6" className='form-control'  value={description} onChange={handleChange} ></textarea>
            </div>
          
        </ModalBody>
        <ModalFooter className='mx-auto' >
          <Button  color="primary"  onClick={handleUpdate}>
            Update Card
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
};

export default EditCard;