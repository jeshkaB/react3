import logo from './logo.svg';
import './App.css';
import SimpsonComponent from "./components_1/SimpsonComponent";
import ApiComponent from "./components_1/ApiComponent";

function App() {
  return (
      <div>
        <SimpsonComponent
            itemName={'Homer'}
            itemBiography={'  Homer Jay Simpson was born on May 12, 1956 to Abraham Simpson II and Mona Olsen. He was raised on the Simpson family farm until they were forced to move out due to Homer jumping out of a hay bale and scaring the cows into giving sour milk, causing the bank to foreclose it. At some point in his childhood, Homer began drinking alcohol like his father and accidentally caused a traffic jam in a Playskool car'}
            itemPicture={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
        />
        <SimpsonComponent
            itemName={'Marge'}
            itemBiography={'Marge Bouvier was born on in Capital City to Clancy Bouvier, a photographer-turned-steward, and Jacqueline Bouvier. She is the youngest daughter of the Bouvier family. She has a pair of older sisters, the joyless twins, Patty, and Selma, both of whom passionately disapprove of Homer.'}
            itemPicture={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
        />
        <SimpsonComponent
            itemName={'Bart'}
            itemBiography={'Bart is a self-proclaimed underachiever and prankster who is constantly in detention who in addition to his behavior is easily distracted. His penchant for shocking people began before he was born, Bart "mooned" Dr. Hibbert while he performed a sonogram on Marge when she was pregnant with him, and moments after being born, ' +
                'he set Homer\'s tie-on fire, starting his life as a prankster (Marge saying that he could not have done it on purpose because he was only ten minutes old)[12]. ' +
                'Bart\'s first words were "Ay Caramba"[13] after he walked in on Homer and Marge at a bad time.'}
            itemPicture={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
        />
        <SimpsonComponent
            itemName={'Lisa'}
            itemBiography={'Lisa is quite eclectic in her knowledge and is notably more concerned with world affairs and problems than her cohorts, which has led her to alienate herself from her peers. Lisa also deeply values her integrity, sometimes at the expense of others\' needs and happiness, as demonstrated when she cheats ' +
                'on a test in The Wind in the Willows to attain her highest grade of A-plus, but later admits her dishonesty to an unreceptive Principal Skinner despite the fact that such a grade allowed the school to gain the extra income it \'desperately\' needs. '}
            itemPicture={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
        />
        <SimpsonComponent
            itemName={'Maggie'}
            itemBiography={'When Marge became pregnant with Lisa, she and Homer bought their first home. Seven years later, Homer felt financially secure enough to quit his job at the power plant and take his dream job at Barney\'s Bowlarama. ' +
                'Soon after, Marge became pregnant with Maggie, and, unable to support his new family member, Homer reapplied for his job at the power plant.'}
            itemPicture={'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'}
        />

        <ApiComponent
            id={1}
            name={'Rick Sanchez'}
            status={'Alive'}
            species={'Human'}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        />
        <ApiComponent
            id={2}
            name={'Morty Smith'}
            status={'Alive'}
            species={'Human'}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
        />
        <ApiComponent
            id={3}
            name={'Summer Smith'}
            status={'Alive'}
            species={'Human'}
            gender={'Female'}
            image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
        />
        <ApiComponent
            id={4}
            name={'Beth Smith'}
            status={'Alive'}
            species={'Human'}
            gender={'Female'}
            image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
        />
        <ApiComponent
            id={5}
            name={'Herry Smith'}
            status={'Alive'}
            species={'Human'}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
        />
        <ApiComponent
            id={6}
            name={'Abadango Cluster Princess'}
            status={'Alive'}
            species={'Alien'}
            gender={'Female'}
            image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
        />
      </div>
  );
}

export default App;
