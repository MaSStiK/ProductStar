import Gallery from "./components/Gallery";
import { useState } from "react";

function App() {

	const [pos, setPos] = useState(0);

    return (
        <Gallery 
			images={[
				"/images/image1.png",
				"/images/image2.jpg",
				"/images/image3.jpg",
				"/images/image4.jpg",
				"/images/image5.jpeg",
			]}

			pos={pos}

			onPrev={() => {
				setPos(pos - 1)
			}}

			onNext={() => {
				setPos(pos + 1)
			}}
        />
    )
}

export default App;
