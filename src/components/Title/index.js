import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Logo from '../../assets/logo.png'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const UniIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

const TitleText = styled.span`
  font-family: 'Bebas Neue', cursive;
  font-size: 16pt;
  color: #fff;
  margin-left: 8px;
  margin-top: 0px;
`

export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <UniIcon id="link" onClick={() => history.push('/')}>
            <img width={'24px'} src={Logo} alt="logo" />
          </UniIcon>
          <TitleText>Giga Exchange</TitleText>
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
