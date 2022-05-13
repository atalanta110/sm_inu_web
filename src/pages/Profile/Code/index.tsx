import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MainButton } from '../../../components/Buttons/MainButton'
import { RootState } from '../../../state/reducers'
import { toast } from 'react-toastify'
import {
  ContainerColumn,
  ContainerRow,
  TextSubTitle,
  TextLabel,
  InputWrapper,
  SelectWrapper,
  OptionWrapper,
  TextDescription,
} from '../../../styles/globalStyles'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state'

type BuyCodeBodyType = {
  username: string
  reward: number
  amount: number
}

const Code: React.FC = () => {
  const dispatch = useDispatch()
  const globalState = useSelector((state: RootState) => state.global)
  const [buyCode, setBuyCode] = useState<BuyCodeBodyType>({
    username: globalState?.user_info?.username || '',
    reward: 1,
    amount: 0,
  })
  const [code, setCode] = useState('')

  const { setUserData } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    if (globalState?.user_info.username) {
      setBuyCode({
        ...buyCode,
        username: globalState?.user_info?.username,
      })
    }
  }, [globalState])

  const purchaseCode = () => {
    if (buyCode.username === '') {
      toast.error('Please login first!', { toastId: 'Not Authorised' })
      return
    }

    if (buyCode.amount === 0) {
      toast.error('Please provide the amount', { toastId: 'Not provided amount' })
      return
    } else if (buyCode.amount > 10) {
      toast.error('Amount should not be greater than 10', { toastId: 'Overflow amount' })
      return
    }

    const data = new FormData()

    data.append('username', buyCode.username)
    data.append('reward', String(buyCode.reward))
    data.append('amount', String(buyCode.amount))

    fetch(`${process.env.REACT_APP_API_BASEURL}/buy-code`, {
      method: 'POST',
      headers: {
        key: `${process.env.REACT_APP_API_KEY}`,
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('purchase data :: ', data)
        if (data?.success) {
          setCode(data?.data?.code)
          setUserData({
            username: globalState?.user_info?.username,
            active: globalState?.user_info?.active,
            dSMIAmount: data?.data?.dsmi_new,
          })
        }
      })
      .catch((error) => {
        console.error('Login Error :: ', error)
      })
  }

  return (
    <ContainerColumn width={'50%'} padding={'0'} margin={'0'}>
      <ContainerColumn
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        padding={'30px 0 0 40px'}
        gap={'20px'}
        minHeight={'800px'}
      >
        <TextSubTitle>Purchase your code</TextSubTitle>
        <ContainerColumn>
          <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'flex-start'}>
            <TextLabel width={'30%'}>{'Username'}</TextLabel>
            <InputWrapper
              value={`${globalState?.user_info?.username}` || ``}
              disabled
              placeholder="Username"
              width={'60%'}
            />
          </ContainerRow>
        </ContainerColumn>
        <ContainerColumn>
          <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'flex-start'}>
            <TextLabel width={'30%'}>{'Reward'}</TextLabel>
            <SelectWrapper
              placeholder="Reward"
              width={'60%'}
              onChange={(e) => {
                setBuyCode({
                  ...buyCode,
                  reward: parseInt(e.target.value),
                })
              }}
            >
              <OptionWrapper value={1}>Raid Token</OptionWrapper>
              <OptionWrapper value={2}>NFT Lootbox</OptionWrapper>
              <OptionWrapper value={3}>Starter Pack Lootbox</OptionWrapper>
            </SelectWrapper>
          </ContainerRow>
        </ContainerColumn>
        <ContainerColumn>
          <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'flex-start'}>
            <TextLabel width={'30%'}>{'Amount'}</TextLabel>
            <InputWrapper
              placeholder="Amount"
              width={'60%'}
              type={'number'}
              max={10}
              min={1}
              onChange={(e) => {
                setBuyCode({
                  ...buyCode,
                  amount: parseInt(e.target.value),
                })
              }}
            />
          </ContainerRow>
        </ContainerColumn>
        <ContainerColumn>
          <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'center'}>
            <MainButton type="submit" margin={'24px 0 0'} borderRadius={'4px'} onClick={() => purchaseCode()}>
              Purchase
            </MainButton>
          </ContainerRow>
        </ContainerColumn>
        {code && (
          <ContainerColumn>
            <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'center'}>
              <TextDescription>{`Your new codes are ${code}`}</TextDescription>
            </ContainerRow>
            <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'center'}>
              <TextDescription color={'var(--secondary)'}>
                {`(Note: Please save your code, it won't be appeared again!)`}
              </TextDescription>
            </ContainerRow>
          </ContainerColumn>
        )}
      </ContainerColumn>
    </ContainerColumn>
  )
}

export default Code
