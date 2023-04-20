/* eslint-disable react-hooks/rules-of-hooks */

import { useIndividualStore } from "../../entities/organizations/individual/model/store";
import { useLegalStore } from "../../entities/organizations/legal/model/store";
import { useRequisitesStore } from "../../entities/requisites/model/store";

export const useStoreRouter = (storeProp, store) => {
    if (store === 'legal') {
        const storeValue = useLegalStore(state => state[storeProp]);
        const setStoreValue = useLegalStore(state => state.setStoreValue);
        return {storeValue: storeValue, setStoreValue: setStoreValue};
    }
    if (store === 'individual') {
        const storeValue = useIndividualStore(state => state[storeProp]);
        const setStoreValue = useIndividualStore(state => state.setStoreValue);
        return {storeValue: storeValue, setStoreValue: setStoreValue};
    }
    if (store === 'requisites') {
        const storeValue = useRequisitesStore(state => state[storeProp]);
        const setStoreValue = useRequisitesStore(state => state.setStoreValue);
        return {storeValue: storeValue, setStoreValue: setStoreValue};
    }
}