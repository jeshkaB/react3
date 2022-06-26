import {useEffect, useState} from "react";
import Launch from "./Launch";

export default function Launches() {
    let [launches, setLaunches] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                    setLaunches(value)
                }
            );
    }, [])

    return (

        <div>
            {launches.filter(launch => launch.launch_year !== '2020').map((launch, index) =>
                <Launch
                    key={index}
                    launch={launch}
                />)}
        </div>)

}