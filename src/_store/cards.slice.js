import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchWrapper } from '_helpers';

// create slice

const name = 'cards';
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const cardActions = { ...slice.actions, ...extraActions };
export const cardsReducer = slice.reducer;

// implementation

function createInitialState() {
    return {
        cards: {}
    }
}

function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}`;

    return {
        getAllCards: getAllCards()
    };    

    function getAllCards() {
        return createAsyncThunk(
            `${name}/cards`,
            async () => await fetchWrapper.get(`${baseUrl}/cards?limit=100&page=1`)
        );
    }
}

function createExtraReducers() {
    return {
        ...getAllCards()
    };

    function getAllCards() {
        var { pending, fulfilled, rejected } = extraActions.getAllCards;
        return {
            [pending]: (state) => {
                state.cards = { loading: true };
            },
            [fulfilled]: (state, action) => {
                state.cards = action.payload;
            },
            [rejected]: (state, action) => {
                state.cards = { error: action.error };
            }
        };
    }
}
