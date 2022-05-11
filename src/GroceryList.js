import { Component } from "react";
import busket from './busket.png'

export class GroceryList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            groceryList: []
        }        
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if(input === '') {
            alert("Please enter an item")
        } else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''})
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                <input type="text" 
                        placeholder="What do you want to buy?"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput} />
                </div>
                <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className="btnAdd btn">Add</button>
                </div>
                <div>
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                                <img src={busket} width="20px" alt="busket"/> 
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="container">
                    <button onClick={() => this.deleteItem()} className="btnDelete btn">Delete</button>
                </div>
                </form>
            </div>
        )
    }
}