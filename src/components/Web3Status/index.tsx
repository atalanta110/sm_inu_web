import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import React from 'react'
import styled from 'styled-components'
import { FiActivity } from 'react-icons/fi'
import { useWalletModalToggle } from '../../state/application/hook'
import { NetworkContextName } from '../../constants/misc'
import WalletModal from '../WalletModal'
import { shortenAddress } from '../../utils'

const Web3StatusGeneric = styled.div`
  display: inline-block;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary);
  padding: 0.5rem 1rem;
  box-shadow: 0px 3px 10px var(--secondary-opacity);
  border: solid;
  border-color: var(--secondary);
  border-width: 1px;
  border-radius: 12px;
  text-decoration: none;
  transition: 0.3s;
  :hover {
    color: var(--secondary);
    border-color: transparent;
    background: var(--primary);
  }
`
const Web3StatusError = styled(Web3StatusGeneric)`
  background-color: #fd4040;
  border: 1px solid #fd4040;
  color: #ffffff;
  font-weight: 500;
  :hover,
  :focus {
    background-color: #fd4040;
  }
`
const Web3StatusConnect = styled(Web3StatusGeneric)``
const Web3StatusConnected = styled(Web3StatusGeneric)<{ pending?: boolean }>`
  background-color: ${({ pending }) => (pending ? '#0093fc' : 'var(--secondary)')};
  color: #ffffff;
  font-weight: 500;
`
const Text = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1rem;
  width: fit-content;
  font-weight: 600;
`
const NetworkIcon = styled(FiActivity)`
  margin-left: 0.25rem;
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
`

const Web3StatusInner = () => {
  const { account, error } = useWeb3React()
  const toggleWalletModal = useWalletModalToggle()

  if (account) {
    return (
      <Web3StatusConnected id="web3-status-connected" onClick={toggleWalletModal}>
        <Text>{shortenAddress(account)}</Text>
      </Web3StatusConnected>
    )
  } else if (error) {
    return (
      <Web3StatusError onClick={toggleWalletModal}>
        <NetworkIcon />
        <Text>{error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error'}</Text>
      </Web3StatusError>
    )
  } else {
    return (
      <Web3StatusConnect id="connect-wallet" onClick={toggleWalletModal}>
        <Text>{'Connect Wallet'}</Text>
      </Web3StatusConnect>
    )
  }
}

const Web3Status: React.FC = () => {
  const { active, account } = useWeb3React()
  const contextNetwork = useWeb3React(NetworkContextName)

  if (!contextNetwork.active && !active) {
    return null
  }

  return (
    <>
      <Web3StatusInner />
      <WalletModal />
    </>
  )
}

export default Web3Status
