import React from 'react'
import { CustomSelector, SelectorOption } from "../../shared/ui/selector/Selector";
import { useIndexPageStore } from "../../pages/store";

const Selector = ({ storeProp }) => {
    const organizationType = useIndexPageStore(store => store.organizationType)
    const setStoreValue = useIndexPageStore(store => store.setStoreValue)
  
    return (
        <CustomSelector 
            value={organizationType || 'individual'} 
            onChange={(e, newValue) => setStoreValue(newValue, storeProp)}
        >
            <SelectorOption value={'individual'}>Индивидуальный предприниматель (ИП)</SelectorOption>
            <SelectorOption value={'legal'}>Общество с ограниченной ответственностью (ООО)</SelectorOption>
        </CustomSelector>
    );
}

export default Selector