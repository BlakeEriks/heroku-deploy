import styled from "styled-components"
import * as faSolid from '@styled-icons/fa-solid'
import Colors from "./Colors"

export const TimesIcon = styled(faSolid.Times)`
    color: ${Colors.accent};
    width: 32px;
    height: 32px;
    transition: color 0.3s;
`

export const PlusIcon = styled(faSolid.Plus)`
    color: ${Colors.accent};
    width: 32px;
    height: 32px;
    transition: color 0.3s ease-in-out;
`