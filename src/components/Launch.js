function Launch({launch}) {
    return (
        <div>
            {<h2> mission name: {launch.mission_name} </h2>}
            { <p> launch year: {launch.launch_year} </p>}
            {<p> mission patch small: <a href={launch.links.mission_patch_small} target='blank'> {launch.links.mission_patch_small}:</a></p>})
        </div>
    );
}

export default Launch;