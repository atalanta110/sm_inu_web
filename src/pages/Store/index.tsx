import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainButton } from '../../components/Buttons/MainButton'
import { RootState } from '../../state/reducers'
import {
  ContainerColumn,
  ContainerRow,
  ImageContainer,
  InputWrapper,
  PageWrapper,
  TextDescription,
  TextLabel,
  TextMain,
  TextSubTitle,
} from '../../styles/globalStyles'
import Banner from '../../components/Banners'
import { toast } from 'react-toastify'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'

import Raidtoken from '../../assets/images/store/store_raidtoken.png'
import Lootbox from '../../assets/images/store/store_lootbox.png'
import Starterpack from '../../assets/images/store/store_starterpack.png'
import Banner4 from '../../assets/images/banner4.jpg'

type BuyCodeBodyType = {
  username: string
  reward: number
  amount: number
}

const Store: React.FC = () => {
  const dispatch = useDispatch()
  const { setUserData } = bindActionCreators(actionCreators, dispatch)

  const globalState = useSelector((state: RootState) => state.global)
  const [buyCode, setBuyCode] = useState<BuyCodeBodyType>({
    username: globalState?.user_info?.username || '',
    reward: 1,
    amount: 0,
  })
  const [code, setCode] = useState('')
  const [title, setTitle] = useState<string>('Raid Token')
  const [price, setPrice] = useState<string>('5')
  const [includes, setIncludes] = useState<Array<string>>(['1 Raid Token'])

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
            pastCodes: globalState?.user_info?.pastCodes,
          })
        }
      })
      .catch((error) => {
        console.error('Login Error :: ', error)
      })
  }
  return (
    <PageWrapper>
      <Banner
        mainTitle={'Store'}
        subTitle={'Moonshot Voyage'}
        summary={'Buy redeemable codes for Moonshot Voyage in-game items and NFTs'}
        src={Banner4}
      />
      <ContainerRow alignItems={'flex-start'}>
        <ContainerColumn width={'65%'} padding={'40px'} margin={'0'}>
          <ContainerRow>
            <ContainerColumn width={'30%'} padding={'0'} margin={'0'}>
              <ImageContainer
                src={Raidtoken}
                borderRadius={'20px'}
                onClick={() => {
                  setBuyCode({
                    ...buyCode,
                    reward: 1,
                  })
                  setTitle('Raid Token')
                  setIncludes(['1 Raid Token'])
                  setPrice('5')
                }}
                border={title === 'Raid Token' ? '5px solid var(--secondary-opacity)' : ''}
              />
            </ContainerColumn>
            <ContainerColumn width={'30%'} padding={'0'} margin={'0'}>
              <ImageContainer
                src={Lootbox}
                borderRadius={'20px'}
                onClick={() => {
                  setBuyCode({
                    ...buyCode,
                    reward: 2,
                  })
                  setTitle('S0 Lootbox')
                  setIncludes(['1 Random Uncommon+ NFT'])
                  setPrice('10')
                }}
                border={title === 'S0 Lootbox' ? '5px solid var(--secondary-opacity)' : ''}
              />
            </ContainerColumn>
            <ContainerColumn width={'30%'} padding={'0'} margin={'0'}>
              <ImageContainer
                src={Starterpack}
                borderRadius={'20px'}
                onClick={() => {
                  setBuyCode({
                    ...buyCode,
                    reward: 2,
                  })
                  setTitle('Starter Pack')
                  setIncludes(['3 Uncommon Character NFTs', '3 Uncommon Weapon NFTs', '1 Raid Token'])
                  setPrice('15')
                }}
                border={title === 'Starter Pack' ? '5px solid var(--secondary-opacity)' : ''}
              />
            </ContainerColumn>
          </ContainerRow>
        </ContainerColumn>
        <ContainerColumn width={'35%'} padding={'0'} margin={'0'}>
          <ContainerColumn
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            padding={'30px 0 30px 40px'}
            gap={'20px'}
            minHeight={'700px'}
          >
            <TextSubTitle>Buy {title}</TextSubTitle>
            <TextMain margin={'0.2rem 0'} fontWeight={'200'} color={'var(--yellow)'}>
              Includes
            </TextMain>
            {includes.length > 0 &&
              includes.map((include, index) => {
                return <TextDescription key={index}>- {include}</TextDescription>
              })}
            <ContainerColumn margin={'30px 0 0 0'}>
              <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'flex-start'}>
                <TextLabel width={'30%'}>{'Price'}</TextLabel>
                <TextDescription>: {price} dSMI</TextDescription>
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
      </ContainerRow>
    </PageWrapper>
  )
}

export default Store
