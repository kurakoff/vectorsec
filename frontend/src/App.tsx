import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState<string>("loading...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="container">
      <h1>VectorSec</h1>
      <p>Cybersecurity Solutions</p>
      <span className="status">API: {status}</span>
    </div>
  );
}

export default App;
