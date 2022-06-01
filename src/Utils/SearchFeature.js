import React, { useState } from 'react';
import styles from "./SearchFeature.module.css";

function SearchFeature(props) 
{   const [SearchTerm, setSearchTerm] = useState("");

    const searchHandler = (event) => {
            setSearchTerm(event.currentTarget.value)
            props.refreshFunction(event.currentTarget.value) //부모컴포넌트(Refer.js)로 검색값이 보내짐 -> newSearchTerm에 담김.
    }
    
    return(
        <div>
            <input
                className={styles.Search}
                name="SearchTerm"
                placeholder="상품 검색"
                value={SearchTerm}
                onChange={searchHandler}  
            />
        </div>
    )
}

export default SearchFeature;