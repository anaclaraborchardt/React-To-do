import React from "react";

const PropertiesCards = ({ properties }) => {

    const propertyInputRef = useRef();
    const[propertyCardInput, setPropertyCard] = useState('');

    const inputPropertyChangeHandler = (event) => {
        setPropertyCard(event.target.value);
    }
}

export default PropertiesCards;