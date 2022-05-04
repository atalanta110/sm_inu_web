import React from 'react'
import { BoxCardWithoutBorder, ContainerRow, ImageContainer, TextCustom } from '../../styles/globalStyles'
import Checkbox from '../../components/Checkbox'
import { MainButton } from '../../components/Buttons/MainButton'
import PIN_ICON from '../../assets/images/pin-icon.svg'

interface ILeaderBoardItem {
  rank: number
  username: string
  difficulty: number
  points: number
  char1: string
  char2: string
  char3: string
  gun1: string
  gun2: string
  gun3: string
  date: string
  checked: boolean
  checkItem: () => void
}

export const LeaderBoardItem: React.FC<ILeaderBoardItem> = ({
  rank,
  username,
  difficulty,
  points,
  char1,
  char2,
  char3,
  gun1,
  gun2,
  gun3,
  date,
  checked,
  checkItem,
}) => {
  return (
    <ContainerRow
      justifyContent={'space-between'}
      padding={'10px'}
      backgroundColor={'var(--light-navy-blue)'}
      margin={'5px 0'}
      width={'100%'}
    >
      {/* <BoxCardWithoutBorder boxWidth={'5%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <Checkbox checked={checked} onChange={checkItem} />
      </BoxCardWithoutBorder> */}
      <BoxCardWithoutBorder boxWidth={'5%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
          {rank}
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
          {username}
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'8%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
          {difficulty}
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'7%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} textAlign={'left'} fontSize={'16px'} fontWeight={300}>
          {points}
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} textAlign={'left'} fontSize={'16px'} fontWeight={300}>
          <a href={`${process.env.REACT_APP_CHARACTER_URL}/${char1}`} target="_blank" rel="noreferrer">
            {char1}
          </a>
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} textAlign={'left'} fontSize={'16px'} fontWeight={300}>
          <a href={`${process.env.REACT_APP_CHARACTER_URL}/${char2}`} target="_blank" rel="noreferrer">
            {char2}
          </a>
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} textAlign={'left'} fontSize={'16px'} fontWeight={300}>
          <a href={`${process.env.REACT_APP_CHARACTER_URL}/${char3}`} target="_blank" rel="noreferrer">
            {char3}
          </a>
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} textAlign={'left'} fontSize={'16px'} fontWeight={300}>
          <a href={`${process.env.REACT_APP_GUN_URL}/${gun1}`} target="_blank" rel="noreferrer">
            {gun1}
          </a>
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} textAlign={'left'} fontSize={'16px'} fontWeight={300}>
          <a href={`${process.env.REACT_APP_GUN_URL}/${gun2}`} target="_blank" rel="noreferrer">
            {gun2}
          </a>
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} textAlign={'left'} fontSize={'16px'} fontWeight={300}>
          <a href={`${process.env.REACT_APP_GUN_URL}/${gun3}`} target="_blank" rel="noreferrer">
            {gun3}
          </a>
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} textAlign={'left'} fontSize={'16px'} fontWeight={300}>
          {date}
        </TextCustom>
      </BoxCardWithoutBorder>
      {/* <BoxCardWithoutBorder boxWidth={'29%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <MainButton
          width={'fit-content'}
          borderRadius={'24px'}
          padding={'10px 10px'}
          backgroundColor={'var(--secondary)'}
          margin={'0'}
        >
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            view Collections &nbsp;
          </TextCustom>
          <ImageContainer src={PIN_ICON} width={'20px'} />
        </MainButton>
      </BoxCardWithoutBorder> */}
    </ContainerRow>
  )
}
