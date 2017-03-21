// @flow
export const add = (state: Object, props: Object): { total: number } => {
  return { total: state.total + state.amount }
};
export const substract = (state: Object, props: Object): { total: number } => {
  return { total: state.total - state.amount }
};
