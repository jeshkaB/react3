// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import {useEffect, useState} from "react";
import Launches from "./components/launches";

function App() {
    let [launches, setLaunches] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setLaunches(value)
            })
    }, [])
    // let l = launches.filter(launch=>launch.launch_year !==2020);
    return (
        <div className="App">
            {launches.filter(launch => launch.launch_year !== '2020').map((launch, index) =>
                <Launches
                    key={index}
                    year={launch.launch_year}
                    name={launch.mission_name}
                    link={launch.links.mission_patch_small}
                />)}


        </div>
    );
}

export default App;
