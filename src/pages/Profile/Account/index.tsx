import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../state/reducers'
import { ContainerColumn, ContainerRow, InputWrapper, TextLabel, TextSubTitle } from '../../../styles/globalStyles'

const Account: React.FC = () => {
  const globalState = useSelector((state: RootState) => state.global)

  return (
    <ContainerColumn width={'100%'} padding={'0'} margin={'0'}>
      <ContainerColumn
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        padding={'30px 0 0 40px'}
        gap={'20px'}
        minHeight={'800px'}
      >
        <TextSubTitle>Personal Settings</TextSubTitle>
        <ContainerColumn>
          <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'flex-start'}>
            <TextLabel width={'10%'}>{'Username'}</TextLabel>
            <InputWrapper
              value={`${globalState?.user_info?.username}` || ``}
              disabled
              placeholder="Username"
              width={'30%'}
            />
          </ContainerRow>
        </ContainerColumn>
        {/* <ContainerColumn>
          <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'flex-start'}>
            <TextLabel width={'10%'}>{'Active Status'}</TextLabel>
            <InputWrapper
              value={`${globalState?.user_info?.active ? 'Active' : 'Deactive'}` || ``}
              disabled
              placeholder="Active"
              width={'30%'}
            />
          </ContainerRow>
        </ContainerColumn> */}
        <ContainerColumn>
          <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'flex-start'}>
            <TextLabel width={'10%'}>{'dSMI Amount'}</TextLabel>
            <InputWrapper
              value={`${globalState?.user_info?.dSMIAmount}` || ``}
              disabled
              placeholder="dSMI amount"
              width={'30%'}
            />
          </ContainerRow>
        </ContainerColumn>
      </ContainerColumn>
    </ContainerColumn>
  )
}

export default Account
