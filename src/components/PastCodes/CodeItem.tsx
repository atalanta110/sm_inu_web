import React from 'react'
import { BoxCardWithoutBorder, ContainerRow, TextCustom } from '../../styles/globalStyles'

interface ICodeItem {
  rank: number
  code: string
}

export const CodeItem: React.FC<ICodeItem> = ({ rank, code }) => {
  return (
    <ContainerRow
      justifyContent={'space-between'}
      padding={'10px'}
      backgroundColor={'var(--light-navy-blue)'}
      margin={'5px 0'}
      width={'100%'}
    >
      <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
          {rank}
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'90%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
          {code}
        </TextCustom>
      </BoxCardWithoutBorder>
    </ContainerRow>
  )
}
