import React from "react";
import {UnitInfo} from '../../interfaces'

import {Container} from './style'

export interface UnitProps{
    eachUnity: UnitInfo;
}

const ItemsUnity: React.FC<UnitProps> = ({eachUnity}) => {
    return(
        <Container>
            <strong>{eachUnity.name}</strong>
            <strong>{eachUnity.companyId === 1 && 'Empresa Teste'}</strong>
        </Container>
    )
}

export default ItemsUnity;