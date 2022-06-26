import {useEffect, useState} from "react";
export default function Launches () {
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
        launches.filter(launch => launch.launch_year !== '2020').map((launch) =>
            <div>
                <h2> mission name: {launch.name} </h2>
                <p> launch year: {launch.launch_year} </p>
                <p> mission patch small: <a href={launch.link.mission_patch_small} target='blank'> {launch.link.mission_patch_small}:</a></p>
            </div>
        ))
}