import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../actions/itemActions";

const MyComponent = ({ items, addItem, removeItem }) => {
    const handleClick = () => {
        addItem("Nouvel élément");
    };
    const handleClickRemove = (index) => {
        removeItem(index);
    };

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleClickRemove(index)}>
                            Supprimer un élément
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={handleClick}>Ajouter un élément</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.items.items, // Assurez-vous d'ajuster le chemin en fonction de votre structure
});

const mapDispatchToProps = {
    addItem,
    removeItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
