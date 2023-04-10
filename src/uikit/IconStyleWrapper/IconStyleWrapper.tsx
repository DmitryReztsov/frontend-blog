import styled from 'styled-components'
import {StyledIconBase} from '@styled-icons/styled-icon'

const IconStyleWrapper = styled.div`
  line-height: 1;
  
  ${StyledIconBase} {
    transition: 0.2s linear;
    color: ${props => props.theme.text.primary};
    
    &:hover {
      transition: 0.2s linear;
      color: ${props => props.theme.palette.primary};
    }
  }
`

export default IconStyleWrapper;