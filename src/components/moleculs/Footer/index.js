import React from 'react'

import './footer.scss'
import {IcFacebook, IcInstagram, IcWhatsapp, IcYoutube, LogoSally} from '../../../assets'

const Icon = ({img}) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoSally} alt="Logo Sally AB" />
        </div>
        <div className="sosial-wrapper">
          <Icon img={IcFacebook} />
          <Icon img={IcInstagram} />
          <Icon img={IcWhatsapp} />
          <Icon img={IcYoutube} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  )
}

export default Footer
