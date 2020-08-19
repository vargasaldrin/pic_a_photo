import React, {useContext} from "react"
import Image from "../components/Image"
import {ThemeContext} from "../Context"
import {getClass} from "../utils/index"

function Photos() {
    const {allPhotos} = useContext(ThemeContext)
    const photoComponents = allPhotos.map((photo, index) => <Image key={photo.id} img={photo} className={getClass(index)} />)

    return (
        <main className="photos">
            {photoComponents}
        </main>
    )
}

export default Photos