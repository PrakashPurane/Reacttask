import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import "./style.css";

function App() {
  return (
    <>
      <div className="container">
        <Card
          title="Basic IT support package"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <Card
          title="IT Consultation Services"
          description={
            <ol>
              <li>System</li>
              <li>Technology</li>
              <li>IT</li>
              <li>Project</li>
            </ol>
          }
        />
        <Card
          title="Custom software development"
          description={
            <ol>
              <li>Tailor</li>
              <li>Database</li>
              <li>Secure</li>
              <li>Ongoing</li>
            </ol>
          }
        ></Card>
        <Card
          title="Cyber security services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
    </>
  );
}

export default App;
