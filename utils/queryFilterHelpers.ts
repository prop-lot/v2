import {
  PropLotFilter,
  FilterOption,
  FilterType as FilterTypeEnum
} from "@/graphql/types/__generated__/types";

/*
  Find and return the preselected filter options from the GraphQL response.
*/
export const buildSelectedFilters = (filter: PropLotFilter) => {
  const selectedParams: string[] = [];
  filter.options.forEach(({ selected, value }) => {
    if (selected) {
      selectedParams.push(value);
    }
  });
  return selectedParams;
};

/*
  Use to keep track of single or multiselect filters for PropLot Home or Profile filters
*/
export const updateSelectedFilters = (
  filter: PropLotFilter,
  selectedFilters: string[],
  opt: FilterOption,
  isSelected: boolean
) => {
  let newFilters = [...selectedFilters];
  if (filter.type === FilterTypeEnum.SINGLE_SELECT) {
    if (isSelected) {
      newFilters = selectedFilters.filter(
        (selectedFilter) => selectedFilter !== opt.value
      );
    } else {
      newFilters = [opt.value];
    }
  }

  if (filter.type === FilterTypeEnum.MULTI_SELECT) {
    if (isSelected) {
      newFilters = selectedFilters.filter(
        (selectedFilter) => selectedFilter !== opt.value
      );
    } else {
      newFilters = [...selectedFilters, opt.value];
    }
  }

  return newFilters;
};
