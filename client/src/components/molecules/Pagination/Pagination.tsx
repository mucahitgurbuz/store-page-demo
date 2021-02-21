import React from 'react'
import { Flex, BoxProps, Text } from 'bumbag'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Button from '../../atoms/Button/Button'

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

export const range = (from: number, to: number, step = 1) => {
  let i = from
  const rangeArray = [] as any

  while (i <= to) {
    rangeArray.push(i)
    i += step
  }

  return rangeArray
}

export const fetchPageNumbers = (totalPages: number, pageNeighbours: number, currentPage: number) => {
  const totalNumbers = pageNeighbours * 2 + 3
  const totalBlocks = totalNumbers + 2

  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, currentPage - pageNeighbours)
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)

    let pages = range(startPage, endPage)

    const hasLeftSpill = startPage > 2
    const hasRightSpill = totalPages - endPage > 1
    const spillOffset = totalNumbers - (pages.length + 1)

    switch (true) {
      case hasLeftSpill && !hasRightSpill: {
        const extraPages = range(startPage - spillOffset, startPage - 1)
        pages = [LEFT_PAGE, ...extraPages, ...pages]
        break
      }

      case !hasLeftSpill && hasRightSpill: {
        const extraPages = range(endPage + 1, endPage + spillOffset)
        pages = [...pages, ...extraPages, RIGHT_PAGE]
        break
      }

      case hasLeftSpill && hasRightSpill:
      default: {
        pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
        break
      }
    }

    return [1, ...pages, totalPages]
  }

  return range(1, totalPages)
}

const commonButtonProps = {
  paddingX: '12px',
  height: '40px',
  backgroundColor: 'transparent',
  padding: 0,
  borderRadius: 'xs',
  color: 'black400',
  _hover: { color: 'primary', backgroundColor: 'transparent' },
} as BoxProps

export interface IPagination {
  pageCount: number
  rowCount: number
  pagination: DqbPaginationProps
}

interface DqbPaginationProps {
  offset: number
  count: number
  currentPage: number
}

export interface IPaginationComponent {
  pageNeighbours?: number
  pagination: IPagination
  handlePageNumberChange: any
}

export const Pagination: React.FC<IPaginationComponent> = ({
  pageNeighbours = 1,
  pagination,
  handlePageNumberChange,
}) => {
  if (pagination.pageCount === 1) return null

  const pages = fetchPageNumbers(pagination.pageCount, pageNeighbours, pagination.pagination.currentPage)

  return (
    <Flex justifyContent="space-between" width="100%">
      <Button
        styleProps={{
          ...commonButtonProps,
          onClick: () =>
            pagination.pagination.currentPage !== 1 &&
            handlePageNumberChange(pagination.pagination.currentPage - 1),
        }}
        icon={<FaArrowLeft />}
        iconPosition="left"
        disabled={pagination.pagination.currentPage === 1}
      >
        <Text>Prev</Text>
      </Button>
      <Flex>
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <Button
                key={index.toString()}
                styleProps={{ ...commonButtonProps, onClick: e => e.preventDefault() }}
              >
                ...
              </Button>
            )

          if (page === RIGHT_PAGE)
            return (
              <Button
                key={index.toString()}
                styleProps={{ ...commonButtonProps, onClick: e => e.preventDefault() }}
              >
                ...
              </Button>
            )

          let activeProps
          const isCurrentPage = pagination.pagination.currentPage === page

          if (isCurrentPage) {
            activeProps = {
              backgroundColor: 'primary',
              color: 'white',
              _hover: { backgroundColor: 'primary' },
            }
          }

          return (
            <Button
              key={index.toString()}
              styleProps={{
                ...commonButtonProps,
                ...(isCurrentPage && activeProps),
                onClick: () => handlePageNumberChange(page),
              }}
            >
              {page}
            </Button>
          )
        })}
      </Flex>
      <Button
        styleProps={{
          ...commonButtonProps,
          onClick: () =>
            pagination.pagination.currentPage !== pagination.pageCount &&
            handlePageNumberChange(pagination.pagination.currentPage + 1),
        }}
        icon={<FaArrowRight />}
        iconPosition="right"
        disabled={pagination.pagination.currentPage === pagination.pageCount}
      >
        <Text>Next</Text>
      </Button>
    </Flex>
  )
}

export default Pagination
