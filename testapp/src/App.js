import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox'
import {robots} from './robots'; 
import { render } from "@testing-library/react";

const state = {
    robots: robots,
    searchthis: ''
}

class App extends Component {
    render(){
        return (
            <>
                <div className="tc">
                    <h1>Friends of the Devil</h1> 
                    <SearchBox />
                    <CardList robots={robots} />
                </div>
                
                
            </>
            
        );
    }
    
}

export default App; 