import React, { useMemo, useState } from 'react'
import {
  BoxCardWithoutBorder,
  ContainerRow,
  ImageContainer,
  TextCustom,
} from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'
import Checkbox from '../../components/Checkbox'
import { MainButton } from '../../components/Buttons/MainButton'
import PIN_ICON from '../../assets/images/pin-icon.svg'

interface IRankItem {
  creator: string
  rank: string
  points: number
  checked: boolean
  checkItem: () => void
}