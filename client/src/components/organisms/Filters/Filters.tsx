import { Flex } from 'bumbag'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBrands } from '../../../state/redux/actions/brandsActions'
import { FilterType, setActiveFilters } from '../../../state/redux/actions/filtersActions'
import FilterBox from '../../molecules/FilterBox/FilterBox'
import SortBox from '../../molecules/SortBox/SortBox'

const Filters: React.FC = () => {
  const dispatch = useDispatch()
  const allBrands = useSelector(state => state.brands.brands)
  const filteredBrands = useSelector(state => state.items.brands)
  const filteredTags = useSelector(state => state.items.tags)
  const activeBrandFilters = useSelector(state => state.filters.brands)
  const activeTagFilters = useSelector(state => state.filters.tags)
  const isItemsBusy = useSelector(state => state.items.loading)
  const isBrandsBusy = useSelector(state => state.brands.loading)

  useEffect(() => {
    dispatch(getBrands())
  }, [])

  const brandCategories = [
    ...allBrands?.map(brand => {
      return {
        label: brand.name,
        slug: brand.slug,
        count: filteredBrands.filter(filteredBrand => filteredBrand.slug === brand.slug)[0]?.count || 0,
        isSelected: activeBrandFilters?.includes(brand.slug),
      }
    }),
    {
      label: 'All',
      slug: 'all',
      count: filteredBrands.reduce((acc, curr) => acc + curr.count, 0),
      isSelected: activeBrandFilters.length === 0,
    },
  ]

  const tagCategories = [
    ...filteredTags?.map(tag => {
      return {
        label: tag.slug,
        slug: tag.slug,
        count: tag.count,
        isSelected: activeTagFilters?.includes(tag.slug),
      }
    }),
    {
      label: 'All',
      slug: 'all',
      count: filteredTags.reduce((acc, curr) => acc + curr.count, 0),
      isSelected: activeTagFilters.length === 0,
    },
  ]

  return (
    <Flex flexDirection="column" gap="24px">
      <SortBox />
      <FilterBox
        title="Brands"
        searchPlaceholder="Search brand"
        categories={brandCategories}
        onSelect={(slug: string) => dispatch(setActiveFilters({ type: FilterType.Brands, value: slug }))}
        isBusy={isItemsBusy || isBrandsBusy}
      />
      <FilterBox
        title="Tags"
        searchPlaceholder="Search tag"
        categories={tagCategories}
        onSelect={(slug: string) => dispatch(setActiveFilters({ type: FilterType.Tags, value: slug }))}
        isBusy={isItemsBusy}
      />
    </Flex>
  )
}

export default Filters
