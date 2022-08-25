export const filterMe = (data, filter) => {
  if (filter.location) {
    data = data.filter((a) => a.location === filter.location);
  }
  if (filter.offer === true || filter.offer === false) {
    data = data.filter((a) => a.offer === filter.offer);
  }
  if (filter.level) {
    data = data.filter((a) => filter.level.some((b) => a.level.includes(b)));
  }
  if (filter.field) {
    data = data.filter((a) => filter.field.some((b) => a.field.includes(b)));
  }
  if (filter.availability) {
    data = data.filter((a) =>
      filter.availability.some((b) => a.availability.includes(b))
    );
  }
  if (filter.techKnowHow) {
    data = data.filter((a) =>
      filter.techKnowHow.some((b) => a.techKnowHow.includes(b))
    );
  }
  if (filter.timeslots) {
    data = data.filter((a) =>
      filter.timeslots.some((b) => a.timeslots.includes(b))
    );
  }
  //TODO date filter
  //if (filter.date) {
  //  data = data.filter((a) =>)
  //}
  //if filter is only a string:
  //if (filter.field) {
  //  data = data.filter((b) => b.field.includes(filter.field));
  //}
  // if all values of filter should be in the result
  //if (filter.field) {
  //  data = data.filter((a) =>
  //    filter.field.every((b) => a.field.includes(b))
  // );
  //}
  return data;
};
