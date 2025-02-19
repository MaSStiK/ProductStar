import "./Gallery.css"

export default function Gallery({images, pos, onPrev, onNext}) {
    pos = pos || 0

    const prevImage = images[pos - 1]
    const curImage = images[pos]
    const nextImage = images[pos + 1]


    return (
        <div className="Gallery">
            <div className="Gallery__list">
                {prevImage ? (
                    <img
                        className="Gallery__photo"
                        src={prevImage}
                        alt=""
                    />
                ) : (
                    <div className="Gallery__photo"></div>
                )}

                {curImage ? (
                    <img
                        className="Gallery__photo"
                        src={curImage}
                        alt=""
                    />
                ) : (
                    <div className="Gallery__photo"></div>
                )}

                {nextImage ? (
                    <img
                        className="Gallery__photo"
                        src={nextImage}
                        alt=""
                    />
                ) : (
                    <div className="Gallery__photo"></div>
                )}

                {/* {images.map((image, idx) => {
                    return (
                        <img
                            key={idx}
                            className="Gallery__photo"
                            src={image}
                            alt=""
                        />
                    )
                })} */}
            </div>

            <div className="Gallery__buttons">
                <button onClick={onPrev}>Prev</button>
                <button onClick={onNext}>Next</button>
            </div>
        </div>
    )
}