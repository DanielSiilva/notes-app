import { useState } from 'react';
import {} from './styles'

export function Search(){
    const [searchText, setSearchText] = useState('');

    return(
        <div>
            <input
                placeholder='Pesquise por notas'
                type='text'
            />

        </div>
    )
}