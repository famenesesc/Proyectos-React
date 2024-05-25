import React from 'react';
import './Definitions.css';

export const Definitions = ({ word, meanings, category, lightMode }) => {
    return (
        <div className="meanings">
            {
                meanings[0] && word && category === 'en' && (   <div>
                                                                    <audio 
                                                                        src={ meanings[0].phonetics[0] && meanings[0].phonetics[0].audio }
                                                                        style={{ backgroundColor: "#FFF", borderRadius: 10 }}
                                                                        controls
                                                                    >
                                                                        Your browser doesn't support audio elements.
                                                                    </audio>
                                                                </div>
                                                            )
            }

            {
                word === "" ? 
                (
                    <span className="subTitle">Start by typing a word in Search</span>
                ) 
                : 
                (
                    meanings.map( (mean) => mean.meanings.map((item) => (
                        item.definitions.map((def) => (
                            <div
                                className="singleMean"
                                style={ 
                                    lightMode
                                    ?
                                    { backgroundColor: "#3B5360", color: "white" } 
                                    :
                                    { backgroundColor: "white", color: "black" } 
                                }
                            >
                                <b>{ def.definition }</b>
                                <hr style={{ backgroundColor: "black", width: "100%" }} />
                                {
                                    def.example && (
                                                        <span>
                                                            <b>Example: </b>
                                                            { def.example }
                                                        </span>
                                                    )
                                }
                                {
                                    def.synonyms && (
                                                        <span>
                                                            <b> Synonyms: </b>
                                                            { def.synonyms.map( s => `${s}, ` ) }
                                                        </span>
                                                    )
                                }
                            </div>
                            )
                    ) ) )
                )
                )
            }
        </div>
    )
}
