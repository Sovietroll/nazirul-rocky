

const AboutMe = () => {
  return ( 
    <>
      <h1 className="about-me">
        About Me
      </h1>
      <p>
        <ul>
          Currently making portfolio page
        </ul>

        <ul>
          Name
        </ul>

        <ul>
          From Marang Terengganu
        </ul>

        <ul>
          Qualifications
        </ul>

        <ul style={{
          padding: 0,
          width: 100,
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h2>Skills</h2>
          <li className="list-1">Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe After Effect</li>
          <li>React.js</li>
          <li>Javascript</li>
          <li>Html+Css</li>
          <li>SASS</li>
          <li>Git</li>


        </ul>
      </p>
    </>
   );
}
 
export default AboutMe;