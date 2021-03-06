import React, { useEffect, useMemo, useState } from 'react'
import {
  ComponentWrapper,
  BoxCardWithoutBorder,
  ContainerColumn,
  ContainerRow,
  PageWrapper,
  TextCustom,
} from '../../../styles/globalStyles'
import { LeaderBoardItem } from '../LeaderBoardItem'
import Banner from '../../../components/Banners'
import Pagination from '../../../components/Pagination'
import Checkbox from '../../../components/Checkbox'

const PageSize = 10

interface IRankLisk {
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
}

const CommonLeaderBoards: React.FC = () => {
  const [rankList, setRankList] = useState<Array<IRankLisk>>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASEURL}/get-leaderboards-t1`)
      .then((response) => response.json())
      .then((data) => {
        console.log('data :: ', data)
        setRankList(data)
      })
  }, [])

  const currentRankList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    const currentRankListTemp = rankList.slice(firstPageIndex, lastPageIndex)
    const checkedList = currentRankListTemp.filter((item) => item.checked)
    if (checkedList.length === currentRankListTemp.length) {
      setSelectAllChecked(true)
    } else {
      setSelectAllChecked(false)
    }

    return currentRankListTemp
  }, [currentPage, rankList])

  const selectAllCheck = () => {
    setSelectAllChecked(!selectAllChecked)
    const tempList = rankList
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    tempList.forEach((item, index) => {
      if (index >= firstPageIndex && index < lastPageIndex) {
        item.checked = !selectAllChecked
      }
    })
    setRankList([...tempList])
  }

  const checkItem = (idx: number) => {
    const tempList = rankList
    const firstPageIndex = (currentPage - 1) * PageSize
    const rankChecked = tempList[idx + firstPageIndex].checked
    const lastPageIndex = firstPageIndex + PageSize
    const checkedList = tempList.filter(
      (item, index) =>
        index >= firstPageIndex && index < lastPageIndex && item.checked && index !== idx + firstPageIndex
    )
    if (checkedList.length === currentRankList.length - 1) {
      setSelectAllChecked(!rankChecked)
    }
    tempList[idx + firstPageIndex] = { ...tempList[idx + firstPageIndex], checked: !rankChecked }
    setRankList([...tempList])
  }

  return (
    <ContainerColumn justifyContent={'flex-start'} width={'100%'} padding={'30px 0 0'} margin={'0'}>
      <ContainerRow justifyContent={'space-between'} padding={'10px'} backgroundColor={'var(--dark-navy)'}>
        {/* <BoxCardWithoutBorder boxWidth={'5%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <Checkbox checked={selectAllChecked} onChange={selectAllCheck} />
        </BoxCardWithoutBorder> */}
        <BoxCardWithoutBorder boxWidth={'5%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Rank
          </TextCustom>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Username
          </TextCustom>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder boxWidth={'8%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Difficulty
          </TextCustom>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder boxWidth={'7%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Points
          </TextCustom>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Char1
          </TextCustom>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Char2
          </TextCustom>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Char3
          </TextCustom>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Gun1
          </TextCustom>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Gun2
          </TextCustom>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Gun3
          </TextCustom>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Date
          </TextCustom>
        </BoxCardWithoutBorder>
      </ContainerRow>
      <ContainerColumn
        justifyContent={'flex-start'}
        width={'100%'}
        padding={'0'}
        margin={'0'}
        style={{ minHeight: '360px' }}
      >
        {currentRankList.map((item, index) => {
          return (
            <LeaderBoardItem
              key={index}
              rank={index + 1}
              username={item.username}
              difficulty={item.difficulty}
              points={item.points}
              checked={item.checked}
              char1={item.char1}
              char2={item.char2}
              char3={item.char3}
              gun1={item.gun1}
              gun2={item.gun2}
              gun3={item.gun3}
              date={item.date}
              checkItem={() => checkItem(index)}
            />
          )
        })}
      </ContainerColumn>
      <Pagination
        currentPage={currentPage}
        totalCount={rankList.length}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </ContainerColumn>
  )
}

export default CommonLeaderBoards
