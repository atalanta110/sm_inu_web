import React, { useEffect, useMemo, useState } from 'react'
import {
  ComponentWrapper,
  BoxCardWithoutBorder,
  ContainerColumn,
  ContainerRow,
  PageWrapper,
  TextCustom,
} from '../../styles/globalStyles'
import { LeaderBoardItem } from './LeaderBoardItem'
import Banner from '../../components/Banners'
import Pagination from '../../components/Pagination'
import Checkbox from '../../components/Checkbox'

const PageSize = 10

// Lorem Data
const ranksList = [
  {
    creator: 'sA-01',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-02',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-03',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-04',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-05',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-06',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-07',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-08',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-09',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-10',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-11',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-12',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-13',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-14',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-15',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
  {
    creator: 'sA-16',
    rank: '@spOrk',
    points: 67,
    checked: false,
  },
]

interface IRankLisk {
  creator: string
  rank: string
  points: number
  checked: boolean
}

const LeaderBoards: React.FC = () => {
  const [rankList, setRankList] = useState<Array<IRankLisk>>(ranksList)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false)

  useEffect(() => {
    setRankList(ranksList)
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
    <PageWrapper>
      <Banner
        mainTitle={'Leaderboards'}
        subTitle={'Moonshot Voyage'}
        summary={
          "Moonshot Voyage is an upcoming launch title on the SMI Play platform. It's a top-down looter shooter game with a play-to-earn system based on SMI Play Token Items."
        }
      />
      <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
        <ContainerColumn justifyContent={'flex-start'} width={'100%'} padding={'20px 0 0 20px'} margin={'0'}>
          <ContainerRow justifyContent={'space-between'} padding={'10px'} backgroundColor={'var(--dark-navy)'}>
            <BoxCardWithoutBorder boxWidth={'5%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
              <Checkbox checked={selectAllChecked} onChange={selectAllCheck} />
            </BoxCardWithoutBorder>
            <BoxCardWithoutBorder boxWidth={'22%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
              <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
                Creator
              </TextCustom>
            </BoxCardWithoutBorder>
            <BoxCardWithoutBorder boxWidth={'22%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
              <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
                Your Rank
              </TextCustom>
            </BoxCardWithoutBorder>
            <BoxCardWithoutBorder boxWidth={'22%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
              <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
                Your Points
              </TextCustom>
            </BoxCardWithoutBorder>
            <BoxCardWithoutBorder boxWidth={'29%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
              <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
                Collect More
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
                  creator={item.creator}
                  rank={item.rank}
                  points={item.points}
                  checked={item.checked}
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
      </ComponentWrapper>
    </PageWrapper>
  )
}

export default LeaderBoards
