//single selection
//multiple selection
import { useState } from "react";
import accordionData from "./data.js";
import './styles.css';

export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMutliSelection, setEnableMultiSelection] = useState(false);

    const [multiple, setMultiple] = useState([]);


    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);

    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMultiple);

    }

    console.log(selected, multiple)

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMutliSelection)}>Enable multi selection</button>
        <div className="accordion">
            {
                accordionData && accordionData.length > 0 ?
                    accordionData.map(accordionDataItem => <div className="item">
                        <div onClick={enableMutliSelection ? () => handleMultiSelection(accordionDataItem.id) : () => handleSingleSelection(accordionDataItem.id)} className="title">
                            <h3>{accordionDataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMutliSelection ?
                                multiple.indexOf(accordionDataItem.id) !== -1 &&
                                ( < div className="content">{accordionDataItem.answer}</div>) :
                    selected === accordionDataItem.id && (<div className="content">{accordionDataItem.answer}</div>)
            }
            { /*
                            selected === accordionDataItem.id || multiple.indexOf(accordionDataItem.id) !== -1 ?
                                <div className="content">{accordionDataItem.answer}</div>
                                : null
                       */ }
        </div>)
        : <div>No data found!</div>
            }
    </div>
    </div >;
}