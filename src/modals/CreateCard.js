import React,{useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateCard = ({modal,toggle,save}) => {
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
const handleSave=()=>{
  let cardObj={};
  cardObj["Name"]=cardName;
  cardObj["description"]=description;
  save(cardObj);

}
    return (
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Enter the details</ModalHeader>
        <ModalBody>
          
            <div className="form-group p-2">
              <label > Company Name</label>
              <input type="text" className='form-control' placeholder='Enter Company Name' value={cardName} onChange={handleChange} name='cardName'/>
            </div>
            <div className="form-group  p-2">
              <label htmlFor="" className='pt-2 pb-1 '>Details</label>
              <textarea name="" id="" cols="" rows="6" className='form-control' placeholder='Enter details.' value={description} onChange={handleChange} namedescription></textarea>
            </div>
          
        </ModalBody>
        <ModalFooter className='mx-auto' >
          <Button  color="primary" onClick={toggle} onClick={handleSave}>
            Create Card
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
};

export default CreateCard;