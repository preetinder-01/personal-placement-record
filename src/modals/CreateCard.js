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
const handleSave=(e)=>{
  e.preventDefault()
  let companyObj={};
  if(cardName !==""){
  companyObj["Name"]=cardName;
  companyObj["description"]=description;
  save(companyObj);}

}
    return (
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Enter the details</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group p-2">
              <label > Company Name</label>
              <input type="text" className='form-control' placeholder='Enter Company Name' value={cardName} onChange={handleChange} name='cardName'/>
            </div>
            <div className="form-group  p-2">
              <label htmlFor="" className='pt-2 pb-1 '>Details</label>
              <textarea name="" id="" cols="23" rows="6" className='form-control' placeholder='Enter details.' value={description} onChange={handleChange} namedescription></textarea>
            </div>
            </form>
        </ModalBody>
        <ModalFooter className='mx-auto' >
          <Button  color="primary"  onClick={handleSave}>
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