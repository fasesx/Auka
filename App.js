import React from 'react';
import Business from './src/scenes/business';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from "./src/reducers/rootReducer";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {reduxFirestore, getFirestore, createFirestoreInstance} from "redux-firestore";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import fbconfig from './src/environment/config';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore})),
        reduxFirestore(fbconfig)
    )
);

const rrfConfig = {
    userProfile: 'users',
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
    firebase: fbconfig,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
};



export default function App() {

    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <Business/>
            </ReactReduxFirebaseProvider>
        </Provider>
    );
}