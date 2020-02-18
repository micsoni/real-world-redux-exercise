export function developersFetched(developersData) {
  return {
    type: "FETCH_DEVELOPERS",
    payload: developersData // array of developers
  };
}
