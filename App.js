// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    const response = await axios.post('/analyze', { code });
    setResult(response.data);
  };

  return (
    <div className="App">
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleAnalyze}>Analyze</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default App;
