import React, {useState} from 'react';
import EditCard from '../modals/Editcard'


const Card = ({cardObj, index, deleteCard, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateCard = (cardObj) => {
        updateListArray(cardObj, index)
    }

    const handleDelete = () => {
        deleteCard(index)
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "card-holder">
                <span class = "card-header mx-auto" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "4px" }}>{cardObj.Name}</span>
                <p className = "card-desc mt-3">{cardObj.description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer" ,"margin":"0 3px"}} onClick={()=>setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditCard modal = {modal} toggle = {toggle} updateCard = {updateCard} cardObj = {cardObj}/>
        </div>
    );
};

export default Card;