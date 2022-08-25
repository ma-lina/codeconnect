import { useState } from "react";

const usePinboardFilters = () => {
  const [filters, _updateFilter] = useState<any>({
    field: undefined,
    location: undefined,
    description: undefined,
    date: undefined,
    techKnowHow: [],
    level: undefined,
    availability: undefined,
    timeslots: undefined,
    offer: undefined,
  });

  const updateFilter = (filterType: any, value: any) => {
    _updateFilter({
      [filterType]: value,
    });
  };

  return {
    models: { filters },
    operations: { updateFilter },
  };
};

export { usePinboardFilters };
