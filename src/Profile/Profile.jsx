import React from 'react'
import Name from '../Name/Name'
import Personal from '../Personal/Personal'
import Email from '../Email/Email'
import Adress from '../Adress/Adress'
import './Profile.css'
function Profile() {
  return (
    <div className='profile'>
        <h1>Profile</h1>
        <hr />

        <Name name = 'Khadija Janaliyeva' />
        <Personal />
        < Email email='Kjanalyeffa@gmail.com'/>
        <Adress adress='Baku city, Xatai district,Neapol 27' />
    </div>
  )
}

export default Profile