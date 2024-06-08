import Logo from './assets/ez-logo.png';
import Card from './components/Card';
import './App.css';
import Form from './components/Form';
import config from './config';

function App() {
  return (
    <div className="app">
      <div className="company-details">
        <img src={Logo} alt="logo" />
        <h1>A Suite of Business Support Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed
        </p>
        <Form />
      </div>
      <div className="cards">
        <div className="card-wrapper">
          {config.map((item) => {
            const { image, heading, subHeading } = item;
            return (
              <Card image={image} heading={heading} subHeading={subHeading} />
            );
          })}
        </div>
      </div>
      <div className="bottom-form">
        <Form />
      </div>
    </div>
  );
}

export default App;
