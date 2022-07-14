import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SaleBanner from "./SaleBanner";

const Home = () => {
    const [homeImgArray, setHomeImgArray] = useState([
        {
            imgSrc: "/img/home-image-1.jpg",
            altText: "Sunglass resting on sand at a beach.",
        },
        {
            imgSrc: "/img/home-image-2.jpg",
            altText: "Mountain landscape with fog",
        },
        {
            imgSrc: "/img/home-image-3.jpg",
            altText: "Display of 16 sunglasses on a white shelf",
        },
    ]);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
            cycleImage(true);
        }, 10000);
        setCurrentImage(homeImgArray[counter]);
        return () => clearInterval(interval);
    }, [counter]);
    const [currentImage, setCurrentImage] = useState(homeImgArray[counter]);
    function cycleImage(add) {
        if (add) {
            if (counter + 1 < homeImgArray.length) {
                setCounter((counter) => counter + 1);
            } else {
                setCounter(0);
            }
        } else {
            if (counter - 1 >= 0) {
                setCounter((counter) => counter - 1);
            } else {
                setCounter(homeImgArray.length - 1);
            }
        }
    }
    return (
        <>
            <SaleBanner />
            <div className="home-page-container">
                <div className="home-page-btns row">
                    <button
                        onClick={() => {
                            cycleImage(false);
                        }}
                        className="image-cycle-btn"
                    >
                        {"<"}
                    </button>
                    <button
                        onClick={() => {
                            cycleImage(true);
                        }}
                        className="image-cycle-btn"
                    >
                        {">"}
                    </button>
                </div>
                <div>
                    <h1 className="home-text">
                        <span>
                            Sunglass Store{" "}
                            <Link className="shop-now-link" to={"/shop"}>
                                Shop Now
                            </Link>
                            <br />
                        </span>{" "}
                        Enjoy in Nature
                    </h1>
                    <img
                        className="home-image"
                        src={currentImage.imgSrc}
                        alt={currentImage.altText}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
