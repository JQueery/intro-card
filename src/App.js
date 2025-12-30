import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./avatar.jpg" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonathan Piedrasanta</h1>
      <p>
        I am a junior React JS developer. When not coding I like to practice
        photography, eat good food, play video games, and learn languages.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML + CSS" color="red" emoji="✨" />
      <Skill name="Javascript" color="gold" emoji="🚀" />
      <Skill name="React" color="cyan" emoji="⚛︎" />
      <Skill name="Web Development" color="lightGreen" emoji="🤓" />
      <Skill name="Git + Github" color="orange" emoji="📚" />
      <Skill name="Salesforce" color="lightBlue" emoji="💻" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name} {props.emoji}
    </div>
  );
}
