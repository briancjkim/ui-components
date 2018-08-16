import React from 'react'
import styled, { StyledFunction } from 'styled-components'
import { Anchor, IAnchorProps } from '../../Internals/Anchor/Anchor'

// tslint:disable-next-line:no-empty-interface
interface IActionLinkProps extends IAnchorProps {}

const styledAnchor: StyledFunction<IActionLinkProps> = styled(Anchor)

export const ActionLink = styledAnchor`
  font-weight: 600;
  font-size: .9375rem;
  text-transform: uppercase;

  &,
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: rgb(5, 87, 223);
  }
`

ActionLink.displayName = 'ActionLink'

export {
  IActionLinkProps
}
