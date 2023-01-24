import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    //Esto es un hook(se crea una carpeta hooks y se crea un .js para el hook useFetchGifs)
    const { images, isLoading } = useFetchGifs( category );

    return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
            {/* Listar dinámicamente las imágenes */}
            {
                //Desestructuramos images para obtener las propiedades id y title    
                images.map( ( image ) => (
                    <GifItem 
                        key={ image.id }
                        { ...image }
                    />
                ))
            }
        </div>
    </>
    )
}
