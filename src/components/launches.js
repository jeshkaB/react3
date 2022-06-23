export default function Launches ({name, year, link}) {
    return (
        <div>
            <h2> mission name: {name} </h2>
            <p> launch year: {year} </p>
            <p> mission patch small: <a href= {link} target='blank'> {link}:</a> </p>

        </div>
    );
}
