import Web3 from 'web3'
import SMI_ABI from '../../constants/ABIs/smi.abi'

class Web3Helper {
  account: string = ''

  async getInstance(chainId: number) {
    const infuraId = process.env.REACT_APP_INFURA_KEY
    let provider = 'https://mainnet.infura.io/v3/' + infuraId

    const web3 = new Web3(new Web3.providers.HttpProvider(provider))
    const accounts = await web3.eth.getAccounts()
    const account = accounts[0]

    this.account = account
    return web3
  }

  getSMIContract(web3: any, SMIAddress: string | undefined) {
    return new web3.eth.Contract(SMI_ABI, SMIAddress)
  }
}

export default new Web3Helper()
