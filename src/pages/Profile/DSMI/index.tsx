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
  TextDescription,
} from '../../../styles/globalStyles'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state'
import { useWeb3React } from '@web3-react/core'
import Web3Helper from '../../../services/web3'
import { SupportedChainId } from '../../../constants/chains'
import Loader from '../../../components/Loader'

const DSMI: React.FC = () => {
  const dispatch = useDispatch()
  const globalState = useSelector((state: RootState) => state.global)
  const { setUserData } = bindActionCreators(actionCreators, dispatch)
  const { active, account } = useWeb3React()
  const [smiAmount, setSmiAmount] = useState<number>(0)
  const [sendAmount, setSendAmount] = useState<number>(0)
  const [smiPrice, setSmiPrice] = useState<number>(0)
  const [etherPrice, setEtherPrice] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [error, setError] = useState<boolean>(false)
  const [dsmiAmount, setDsmiAmount] = useState<number>(0)
  const [message, setMessage] = useState<String>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_COINGECKO_API}/coins/safemoon-inu`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('smi price data :: ', data)
        setSmiPrice(data.market_data.current_price.usd)
      })
      .catch((error) => {
        console.error(error)
      })

    fetch(`${process.env.REACT_APP_COINGECKO_API}/coins/ethereum`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('ether price data :: ', data)
        setEtherPrice(data.market_data.current_price.usd)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    async function getAmount() {
      const web3 = await Web3Helper.getInstance(SupportedChainId.ETHEREUM)
      const contract = Web3Helper.getSMIContract(web3, process.env.REACT_APP_SMI_ADDRESS)
      const amount = await contract.methods.balanceOf(account).call()
      console.log('REACT_APP_SMI_DECIMAL :: ', process.env.REACT_APP_SMI_DECIMAL)
      if (process.env.REACT_APP_SMI_DECIMAL !== undefined && parseInt(process.env.REACT_APP_SMI_DECIMAL) !== 0) {
        console.log('smi amount :: ', amount / 10 ** parseInt(process.env.REACT_APP_SMI_DECIMAL))
        setSmiAmount(amount / 10 ** parseInt(process.env.REACT_APP_SMI_DECIMAL))
      }
    }
    getAmount()
    // eslint-disable-next-line
  }, [])

  const exchange = async () => {
    const web3 = await Web3Helper.getInstance(SupportedChainId.ETHEREUM)
    const contract = Web3Helper.getSMIContract(web3, process.env.REACT_APP_SMI_ADDRESS)
    const gasPrice = await web3.eth.getGasPrice()
    const count = await web3.eth.getTransactionCount(account || '')

    setLoading(true)

    const txObject = {
      from: account || '',
      nonce: Number('0x' + count.toString(16)),
      to: process.env.REACT_APP_SMI_ADDRESS || '',
      gas: 100000,
      value: '0x0',
      data: contract.methods
        .transfer(
          process.env.REACT_APP_MV_STORE_ADDRESS,
          web3.utils.toHex(web3.utils.toWei((sendAmount / 10).toString(), 'gwei'))
        )
        .encodeABI(),
      gasPrice: gasPrice,
    }
    console.log(txObject)
    web3.eth.accounts.signTransaction(txObject, process.env.REACT_APP_PRIVATE_KEY || '', (err, res) => {
      if (err) {
        console.log('err 1', err)
      } else {
        console.log('res 1', res)
      }

      const raw = res.rawTransaction
      web3.eth.sendSignedTransaction(raw || '').on('receipt', (receipt) => {
        console.log('receipt :: ', receipt)

        if (receipt && receipt.status && !error) {
          const data = new FormData()
          if (sendAmount === 0) return

          let txFee = receipt.gasUsed * receipt.effectiveGasPrice * 10 ** -18 * etherPrice
          let dsmiAmount = 0
          if (txFee >= 25) {
            dsmiAmount = Math.round(sendAmount * smiPrice * 1.02 + txFee)
          } else {
            dsmiAmount = Math.round(sendAmount * smiPrice * 1.02)
          }

          setDsmiAmount(dsmiAmount)

          data.append('username', globalState.user_info.username || '')
          data.append('dsmi', String(dsmiAmount))

          fetch(`${process.env.REACT_APP_API_BASEURL}/give-dsmi`, {
            method: 'POST',
            headers: {
              key: `${process.env.REACT_APP_API_KEY}`,
            },
            body: data,
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('got dSMI :: ', data)
              if (data?.success) {
                setUserData({
                  username: data?.data?.username,
                  active: globalState.user_info.active,
                  dSMIAmount: data?.data?.dsmi_new,
                })
                setMessage(data?.message)
                setLoading(false)
              }
            })
            .catch((error) => {
              setLoading(false)
              console.error(error)
            })
        }
      })
    })
  }

  const changeAmount = (amount: number) => {
    let _totalPrice = amount * smiPrice
    setSendAmount(amount)
    setTotalPrice(_totalPrice)
    // if (_totalPrice <= 25) {
    //   setError(true)
    // } else {
    //   setError(false)
    // }
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
        <TextSubTitle>Exchange your dSMI</TextSubTitle>
        <ContainerColumn>
          <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'flex-start'}>
            <TextLabel width={'30%'}>{'Total SMI Amount'}</TextLabel>
            <InputWrapper value={`${smiAmount}` || ``} disabled placeholder="Amount" width={'50%'} />
          </ContainerRow>
        </ContainerColumn>
        <ContainerColumn>
          <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'flex-start'}>
            <TextLabel width={'30%'}>{'SMI Price(USD)'}</TextLabel>
            <InputWrapper value={`${smiPrice}` || ``} disabled placeholder="Price" width={'50%'} />
          </ContainerRow>
        </ContainerColumn>
        <ContainerColumn>
          <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'flex-start'}>
            <TextLabel width={'30%'}>{'Amount'}</TextLabel>
            <ContainerColumn width={'50%'}>
              <InputWrapper
                placeholder="Amount"
                width={'100%'}
                type={'number'}
                min={1}
                error={error}
                onChange={(e) => changeAmount(parseInt(e.target.value))}
              />
              {error && (
                <TextDescription color={'var(--secondary)'}>
                  {`(Note: Total price should be greater than $25!)`}
                </TextDescription>
              )}
            </ContainerColumn>
            <TextLabel width={'10%'}>{totalPrice !== 0 ? `$${totalPrice}` : ''}</TextLabel>
          </ContainerRow>
        </ContainerColumn>
        <ContainerColumn>
          <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'center'}>
            <MainButton
              type="submit"
              margin={'24px 0 0'}
              borderRadius={'4px'}
              onClick={() => exchange()}
              disabled={loading}
            >
              Exchange
            </MainButton>
          </ContainerRow>
        </ContainerColumn>
        {message && (
          <ContainerColumn>
            <ContainerRow alignItems={'center'} margin={'12px 0 0'} justifyContent={'center'}>
              <TextDescription>{`${message}`}</TextDescription>
            </ContainerRow>
          </ContainerColumn>
        )}
      </ContainerColumn>
    </ContainerColumn>
  )
}

export default DSMI
