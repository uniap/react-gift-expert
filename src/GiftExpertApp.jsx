import { useState } from "react";
import { AddCategory, GridGift } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch', 'Dragon Ball'] );

    const addCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;        
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory 
                onNewCategory={ (value) => addCategory(value)}
            />
            
            {   
                categories.map( (category) => (
                    <GridGift 
                        key={ category }
                        category= { category } 
                    />  
                ))
            }
        </>
    )
}