import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MyGitHubCard from './components/GitHubCard';

function App() {
  //gets my github info
  const [myGitName, getGitName] = useState('')
  const [myGitUrl, getGitURL] = useState('')
  const [myGitFace, getGitFace] = useState('')
  const [myGitBio, getGitBio] = useState('')
  //creates our useEffect to fetch once and never againg -- empty dependency array
  useEffect(() => {
    fetch('https://api.github.com/users/sjcowdery96')
      .then(res => res.json())
      .then(data => {
        getGitName(data.name)
        getGitURL(data.html_url)
        getGitFace(data.avatar_url)
        getGitBio(data.bio)
      })

  }, [])

  return (
    <div className="App">
      <MyGitHubCard myBio={myGitBio} myName={myGitName} myface={myGitFace} myURL={myGitUrl}></MyGitHubCard>
    </div>
  );
}

export default App;
