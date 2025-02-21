import '../style/Home.css'

function Home() {

  const handleClick = (type : string) => {
    if(type === "Basic") window.location.href = "http://localhost:5173/checkout/basic";
    if(type === "Standard") window.location.href = "http://localhost:5173/checkout/standard";
    if(type === "Pro") window.location.href = "http://localhost:5173/checkout/pro";
  }

  return (
    <>
      <div className="container">
        <h1>Choose a subscription plan</h1>
        <div className="plans">
          <div className="plan">
            <h2>Basic</h2>
            <p className="price">$10</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button onClick={() => handleClick("Basic")}>Subscribe</button>
          </div>
          <div className="plan">
            <h2>Standard</h2>
            <p className="price">$20</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button onClick={() => handleClick("Standard")}>Subscribe</button>
          </div>
          <div className="plan">
            <h2>Pro</h2>
            <p className="price">$50</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button onClick={() => handleClick("Pro")}>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home