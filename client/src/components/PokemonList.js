import { useState, useEffect } from "react";
import "../App.css";
import PokeSear from "./PokeSear";

const PokemonList = () => {
    

    return (
        <div>
            <PokeSear />
            {/* <div>
                <lable>
                    <h3>Search Your Pokemon</h3>
                </lable>
                <input type='text' placeholder='Search..' onChange={(event) => setSearch(event.target.value)} />
            </div>

            <div>
                {data &&
                    data
                        .filter((e) => {
                            if (search === "") {
                                return e;
                            } else if (e.name.english.toLowerCase().includes(search.toLowerCase())) {
                                return search;
                            }
                        })
                        .map((e, index) => {
                            return (
                                <div>
                                    <p key={index}>
                                        <p>{e.name.english}</p>
                                        
                                    </p>
                                </div>
                            );
                        })}
            </div> */}
        </div>
    );
};

export default PokemonList;

