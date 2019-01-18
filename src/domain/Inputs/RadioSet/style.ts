import styled, {css} from 'styled-components'
import { RadioInput } from '../../Inputs'
import { Props } from '../../../common'

interface IRadioSetWrapperProps {
  orientation: Props.Orientation
}

export const RadioSetWrapper = styled.div`
  display: inline-flex;
  max-width: 100%;
    
  ${(props: IRadioSetWrapperProps) => {
    if (props.orientation === Props.Orientation.Vertical) {
      return css`
        flex-direction: column
      `
    }
    return css`
      flex-direction: row;
      flex-wrap: wrap;  
    `
  }}
`

export const StyledRadioInput = styled(RadioInput)`
  margin-bottom: 8px;
`