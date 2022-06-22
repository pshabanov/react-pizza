import React from 'react';
import PizzaItem from "./PizzaItem";

const PizzaList = ({items}) => {
    return (
        <div className="content__items">
            {items.map(pizza=><PizzaItem/>)}
        </div>
    );
};

export default PizzaList;