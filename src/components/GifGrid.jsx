import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log({isLoading});    

    return (
        <>
            <h3>{category}</h3>
            {
                //If mas corto, si isLoading esta activo, Cargando... se ejecuta
                //isLoading && (<h2>Cargando...</h2>)

                isLoading 
                ? (<h2>Cargando...</h2>)
                : null
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                    <GifItem 
                        key={image.id}
                        image={image}
                    />
                    ))  
                }
                
            </div>
        </>
    )
}