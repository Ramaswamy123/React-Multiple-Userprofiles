import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imagUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: ' Randy',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imagUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: ' Randy',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imagUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: ' Randy',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imagUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: ' Randy',
    role: 'Software Developer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
