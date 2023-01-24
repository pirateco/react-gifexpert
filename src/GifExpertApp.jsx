import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) =>{    
    //console.log(newCategory);

    if ( categories.includes(newCategory) ) return;
    
    //Para insertar un elemento al arreglo forma 1
    setCategories([ newCategory, ...categories ]);

    //Para insertar un elemento al arreglo forma 2
    //setCategories( cat => [...cat, 'Valorant'] );


  }

  //console.log(categories);

  return (
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory 
            onNewCategory = { onAddCategory }
        />

        { 
          categories.map( ( category ) => (
                <GifGrid key={ category } category={ category }/>
            )) 
        }
    </>
  )
}
