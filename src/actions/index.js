export function selectBook(book) {
  //selectBook is an bindActionCreator, it needs to reutrn an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
