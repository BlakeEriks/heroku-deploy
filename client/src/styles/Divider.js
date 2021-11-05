import styled from 'styled-components'
import Colors from './Colors'

export const HorizontalDivider = styled.div`
    border: 2px solid ${props => Colors[props.color] || Colors.accent};
    width: 90%;
    margin: 0 auto;
`