import { useEffect, useState, ReactNode, MouseEvent } from 'react';
import { buildSelectedFilters, updateSelectedFilters } from '@/utils/queryFilterHelpers';

import {
  PropLotFilter,
  FilterOption,
  FilterType as FilterTypeEnum
} from "@/graphql/types/__generated__/types";

export type GenericFilter = {
  id: string;
  type: FilterTypeEnum;
  label: string | null;
  __typename: 'PropLotFilter';
  options: {
    id: string;
    label: string | null;
    selected: boolean;
    value: string;
    icon: string | null;
    __typename: 'FilterOption';
  }[];
};

export const TabWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 flex-row items-center overflow-scroll pt-[8px] gap-[16px]">
      {children}
    </div>
  );
};

export const TabOption = ({
  id,
  isSelected,
  onClick,
  children,
}: {
  id: string;
  isSelected: boolean;
  onClick: (e: MouseEvent) => void;
  children: ReactNode;
}) => {
  return (
    <div
      onClick={onClick}
      key={id}
      className={`${
        isSelected
          ? 'text-[#2B83F6] underline underline-offset-8 decoration-2'
          : 'hover:text-[#2B83F6] pb-[6px]'
      } whitespace-nowrap cursor-pointer text-dark-grey flex-1 sm:flex-none font-semibold font-inter pb-[2px]`}
    >
      {children}
    </div>
  );
};

const ProfileTabFilters = ({
  filter,
  updateFilters,
}: {
  filter: PropLotFilter;
  updateFilters: (filters: string[], filterId: string) => void;
}) => {
  const [selectedFilters, setSelectedFilters] = useState(buildSelectedFilters(filter));

  useEffect(() => {
    setSelectedFilters(buildSelectedFilters(filter));
  }, [filter]);

  const handleUpdateFilters = (opt: FilterOption, isSelected: boolean) => {
    const newFilters = updateSelectedFilters(filter, selectedFilters, opt, isSelected);

    setSelectedFilters(newFilters);
    updateFilters(newFilters, filter.id);
  };

  return (
    <TabWrapper>
      {filter.options.map(opt => {
        const isSelected = selectedFilters.some(selectedFilter => selectedFilter === opt.value);
        return (
          <TabOption
            key={opt.id}
            id={opt.id}
            isSelected={isSelected}
            onClick={(e: MouseEvent) => {
              e.preventDefault();
              handleUpdateFilters(opt, isSelected);
            }}
          >
            {opt.label}
          </TabOption>
        );
      })}
    </TabWrapper>
  );
};

export default ProfileTabFilters;
