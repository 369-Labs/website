import Typed from 'typed.js'
import React, {Component} from "react";
import styled from 'styled-components'

const Element = styled.span`
text-align: center;
color: cyan;`


class CryptoAssets extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        'Bet',
        'Buy',
        'Sell',
        'Stake',
        'Store'
      ]
      ,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      cursorChar: '|',
    }
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <>
        <Element
          style={{whiteSpace: 'pre'}}
          ref={el => {
            this.el = el
          }}
        />
    
      </>
      
    )
  }
}

export default CryptoAssets
