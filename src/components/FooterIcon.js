import React from 'react'

function FooterIcon(props) {
 return (
  <a className="mx-1 btn btn-outline-light btn-social" href="#!"><i className={`fab fa-fw ${props.cName}`} /></a>
 )
}

export default FooterIcon
