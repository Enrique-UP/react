getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => processOrders(orders))
  .then(() => console.log('All done!'))
  .catch(handleError);