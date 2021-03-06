import classNames from 'classnames'
import {
  isEmpty,
  isNil
} from 'lodash'
import React from 'react'

import { Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons'
import { AvatarPicture, AvatarPictureContainer } from './style'
const style = require('./Avatar.scss')

enum AvatarStatusDotColor {
  Indigo = 'indigo',
  Blue = 'blue',
  Green = 'green',
  Orange = 'orange',
  Red = 'red',
  Neutral = 'neutral',
  Cyan = 'cyan',
  Dark = 'dark'
}

export interface IAvatarProps {
  /** Size of the avatar  */
  size?: Props.AvatarSize
  /** Initials to display if no valid `imageUrl` or `imageData` is passed to Avatar */
  initials?: string
  /** Text for the black, transparent overlay (both Label and Icon have to be present for the overlay to render) */
  hoverLabel?: string
  /** Label for the black, transparent overlay (both Label and Icon have to be present for the overlay to render) */
  hoverIcon?: string
  /** Handle the component click (If the function is not present, cursor and border effects will not appear on hover) */
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  /** Image URL */
  imageUrl?: string
  /** Image blob data */
  imageData?: string
  /** Display a coloured status dot on the avatar */
  statusDot?: AvatarStatusDotColor | 'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'neutral' | 'highlight' | 'dark'
  /** Display an icon component on the avatar */
  statusIcon?: JSX.Element

  className?: string
}

export interface IAvatarState {
  showInitials: boolean
}

class Avatar extends React.Component<IAvatarProps> {
  public static defaultProps: IAvatarProps = {
    size: Props.AvatarSize.Medium
  }
  public state: IAvatarState = {
    showInitials: true
  }

  constructor (props: IAvatarProps) {
    super(props)

    this.state = {
      showInitials: !this.hasImage(props)
    }
  }

  public componentDidUpdate (prevProps: IAvatarProps): void {
    if (this.hasImage(prevProps) !== this.hasImage(this.props)) {
      this.setState({
        showInitials: !this.state.showInitials
      })
    }
  }

  public render (): JSX.Element | null {
    const {
      className,
      size,
      handleClick
    } = this.props

    return (
      <div
        className={classNames(
          style.Avatar,
          className,
          `avatar-${size}`
        )}
      >
        <div
          className={classNames(
            'avatar-inner-container',
            { 'with-hover': !isNil(handleClick) }
          )}
          onClick={this.handleAvatarClick}
        >
          {this.hoverDom}
          {this.avatarContent}
        </div>
        {this.statusDot}
        {this.statusIcon}
      </div>
    )
  }

  protected hasImage = (props: IAvatarProps): boolean => {
    const {
      imageUrl,
      imageData
    } = props

    return !isEmpty(imageUrl) || !isEmpty(imageData)
  }

  private handleAvatarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const {
      handleClick
    } = this.props

    if (!isNil(handleClick)) {
      handleClick(event)
    }
  }

  private get hoverDom (): JSX.Element | null {
    const {
      size,
      hoverLabel,
      hoverIcon
    } = this.props

    if (isNil(hoverLabel) && isNil(hoverIcon)) {
      return null
    }

    return (
      <div className={classNames('avatar-hover', `avatar-${size}`)}>
        <FontAwesomeIcon type='solid' icon='camera' />
        <span className='avatar-hover-label'>{hoverLabel}</span>
      </div>
    )
  }

  private get avatarContent (): JSX.Element {
    const {
      initials,
      imageUrl,
      imageData
    } = this.props

    if (this.state.showInitials) {
      return (
        <div className='avatar-initials-container'>
          <span className='avatar-initials'>
            {initials}
          </span>
        </div>
      )
    }

    return (
      <AvatarPictureContainer imageUrl={imageUrl || imageData || ''}>
        {this.picture}
      </AvatarPictureContainer>
    )
  }

  private get picture (): JSX.Element {
    const {
      imageUrl,
      imageData
    } = this.props

    const errorHandler = () => { this.setState({ showInitials: true }) }

    return (
      <AvatarPicture
        src={imageUrl || imageData}
        onError={errorHandler}
      />
    )
  }

  private get statusDot (): JSX.Element | null {
    const {
      statusDot
    } = this.props

    if (statusDot) {
      let statusDotClassname = statusDot

      switch (statusDot) {
        case AvatarStatusDotColor.Indigo:
          statusDotClassname = 'primary'
          break
        case AvatarStatusDotColor.Blue:
          statusDotClassname = 'secondary'
          break
        case AvatarStatusDotColor.Green:
          statusDotClassname = 'success'
          break
        case AvatarStatusDotColor.Orange:
          statusDotClassname = 'warning'
          break
        case AvatarStatusDotColor.Red:
          statusDotClassname = 'alert'
          break
        case AvatarStatusDotColor.Cyan:
          statusDotClassname = 'highlight'
      }

      return <span className={`status-dot ${statusDotClassname}`} />
    }

    return null
  }

  private get statusIcon (): JSX.Element | null {
    const {
      statusIcon
    } = this.props

    if (statusIcon) {
      return (
        <span className='status-icon'>
          {statusIcon}
        </span>
      )
    }

    return null
  }
}

export {
  Avatar,
  AvatarStatusDotColor
}
