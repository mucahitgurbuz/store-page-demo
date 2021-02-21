import { Flex } from 'bumbag'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCompanies } from '../../../state/redux/actions/companiesActions'
import { FilterType, setActiveFilters } from '../../../state/redux/actions/filtersActions'
import FilterBox from '../../molecules/FilterBox/FilterBox'
import SortBox from '../../molecules/SortBox/SortBox'

const Filters: React.FC = () => {
  const dispatch = useDispatch()
  const brands = useSelector(state => state.companies)
  const activeBrandFilters = useSelector(state => state.filters.brands)

  useEffect(() => {
    dispatch(getCompanies())
  }, [])
  return (
    <Flex flexDirection="column" gap="24px">
      <SortBox />
      <FilterBox
        title="Brands"
        searchPlaceholder="Search brand"
        categories={brands.companies?.map(brand => {
          return { label: brand.name, slug: brand.slug, isSelected: activeBrandFilters?.includes(brand.slug) }
        })}
        onSearch={() => null}
        onSelect={(slug: string) => dispatch(setActiveFilters({ type: FilterType.Brands, value: slug }))}
      />
      <FilterBox
        title="Tags"
        searchPlaceholder="Search tag"
        categories={[
          { label: 'All', count: 18, isSelected: true },
          { label: 'Beach', count: 9, isSelected: false },
          { label: 'People', count: 4, isSelected: true },
          { label: 'Houses', count: 2, isSelected: false },
          { label: 'Trees', count: 1, isSelected: false },
        ]}
        onSearch={() => null}
        onSelect={() => null}
      />
    </Flex>
  )
}

export default Filters
