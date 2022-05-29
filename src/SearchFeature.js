import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) 
{   const [SearchTerm, setSearchTerm] = useState("")

    const searchHandler = (event) => {
        const searchHandler = (event) => {
            setSearchTerm(event.currentTarget.value)
            props.refreshFunction(event.currentTarget.value) //부모컴포넌트(Refer.js)로 검색값이 보내짐 -> newSearchTerm에 담김.
        }
    }
    return(
        <div>
            <Search
                placeholder="input search text"
                onSearch={searchHandler}
                style={{ width: 300 }}
                value={SearchTerm}
            />
        </div>
    )
}

export default SearchFeature;