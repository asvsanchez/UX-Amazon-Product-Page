interface IGlobalState {
    price: string;
}

export default IGlobalState;

export const initialState: IGlobalState = {
    price: "39,99 €"
}