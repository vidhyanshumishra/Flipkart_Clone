import styled from '@emotion/styled'
import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

const Component = styled(ButtonGroup)`
 margin-top: 30px;
`

const GroupButton = () => {
  return (
    <Component>
      <Button>-</Button>
      <Button>1</Button>
      <Button>+</Button>
    </Component>
  )
}

export default GroupButton;
