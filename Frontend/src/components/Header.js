import React from 'react'
import '../css/Header.css'
import logo from '../css/logo_eng.gif'
import { Image } from 'semantic-ui-react'

const header = () => {
    return(
        <div className="header">
            <Image src={logo} />
        </div>
    )
}

export default header;