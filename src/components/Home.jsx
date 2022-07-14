import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SaleBanner from "./SaleBanner";

const Home = () => {
    const [homeImgArray, setHomeImgArray] = useState([
        { imgSrc: "/img/home-image-1.jpg" },
        { imgSrc: "/img/home-image-2.jpg" },
        { imgSrc: "/img/home-image-3.jpg" },
    ]);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            cycleImage(true);
        }, 10000);
        setCurrentImage(homeImgArray[counter]);
    }, [counter]);
    const [currentImage, setCurrentImage] = useState(homeImgArray[counter]);
    function cycleImage(add) {
        if (add) {
            if (counter + 1 < homeImgArray.length) {
                setCounter(counter + 1);
            } else {
                setCounter(0);
            }
        } else {
            if (counter - 1 <= 0) {
                setCounter(counter - 1);
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
                            cycleImage(true);
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
                            Sunglass Store <Link to={"/shop"}>Shop Now</Link>
                            <br />
                        </span>{" "}
                        Enjoy in Nature
                        {/* {imageText} */}
                    </h1>
                    <img
                        className="home-image"
                        src={currentImage.imgSrc}
                        alt="Mountain landscape with fog"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
