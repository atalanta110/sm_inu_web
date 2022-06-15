import React, { useEffect, useMemo, useState } from 'react'
import { BoxCardWithoutBorder, ContainerColumn, ContainerRow, TextCustom } from '../../styles/globalStyles'
import { CodeItem } from './CodeItem'
import Pagination from '../../components/Pagination'

const PageSize = 10

interface IRankLisk {
  code: string
}

const PastCodes: React.FC<{ codes?: string[] }> = ({ codes = [] }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const currentRankList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    const currentRankListTemp = codes.slice(firstPageIndex, lastPageIndex)

    return currentRankListTemp
  }, [currentPage, codes])

  return (
    <ContainerColumn justifyContent={'flex-start'} width={'100%'} padding={'30px 0 0'} margin={'0'}>
      <ContainerRow justifyContent={'space-between'} padding={'10px'} backgroundColor={'var(--dark-navy)'}>
        <BoxCardWithoutBorder boxWidth={'10%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            No
          </TextCustom>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder boxWidth={'90%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Username
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
        {currentRankList.map((item: any, index: number) => {
          return <CodeItem key={index} rank={index + 1} code={item} />
        })}
      </ContainerColumn>
      <Pagination
        currentPage={currentPage}
        totalCount={codes.length}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </ContainerColumn>
  )
}

export default PastCodes
