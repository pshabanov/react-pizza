import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaList from "./components/PizzaList";
import {useState} from "react";


function App() {

    const [pizza, setPizza] =  useState([1,2,3,4,5,6,7,8,9,10,11])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <PizzaList items={pizza} />
                </div>
            </div>
        </div>
    );
}

export default App;
