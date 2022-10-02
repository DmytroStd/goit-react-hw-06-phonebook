export const getFilter = ({ contacts }) => contacts.filter;

export const getContacts = ({ contacts }) => contacts.items;

export const getFilterContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    return (
      normalizedName.includes(normalizedFilter) ||
      normalizedNumber.includes(normalizedFilter)
    );
  });
  return result;
};
