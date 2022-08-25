import { useState } from "react";

const usePinboardFilters = () => {
  const [filters, _updateFilter] = useState<any>({
    field: [],
    location: "",
    date: undefined,
    techKnowHow: [],
    level: [],
    availability: [],
    timeslots: [],
    offer: true,
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
