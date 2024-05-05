import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Pagination from "./Pagination";
import "../../Css/Home.css";
import image1 from "../../components/images/img1.jpg";
import image2 from "../../components/images/img2.jpg";
import image3 from "../../components/images/img3.jpg";


import { useNavigate } from "react-router-dom";
const Home = () => {
  const search = useLocation().search;
  const searchKey = new URLSearchParams(search).get("search");
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const getStories = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `/story/getAllStories?search=${searchKey || ""}&page=${page}`
        );

        if (searchKey) {
          navigate({
            pathname: "/",
            search: `?search=${searchKey}${page > 1 ? `&page=${page}` : ""}`,
          });
        } else {
          navigate({
            pathname: "/",
            search: `${page > 1 ? `page=${page}` : ""}`,
          });
        }
        setStories(data.data);
        setPages(data.pages);

        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    getStories();
  }, [setLoading, search, page, navigate]);

  useEffect(() => {
    setPage(1);
  }, [searchKey]);

  return (
    <div className="Inclusive-home-page">
      {loading ? (
        <div className="skeleton_emp">
          {[...Array(6)].map(() => {
            return (
              // theme dark :> default : light
              <SkeletonStory key={uuidv4()} />
            );
          })}
        </div>
      ) : (
        <div>
          <div className="story-card-wrapper">
            {stories.length !== 0 ? (
              stories.map((story) => {
                return <CardStory key={uuidv4()} story={story} />;
              })
            ) : (
              <NoStories />
            )}
          </div>

          <Pagination page={page} pages={pages} changePage={setPage} />

          <div className="about-first">
            <h2>Our Story: Unveiling Our Passion For Travel</h2>
          </div>
          <div className="about-content">
            <div className="about-content-pic">
              <img src={image1}></img>
            </div>
            <div className="about-content-text">
              <h3>Our story</h3>
              <p>
                We have provided you with our best services. The purpose of a
                travel agency is to sell transportation and accommodation for
                travel destinations, plan itineraries, and collect payments.
              </p>
            </div>
          </div>
          <div className="about-content">
            <div className="about-content-text">
              <h3>Our Mission</h3>
              <p>
                Our mission is to perform and deliver excellent quality services
                to guarantee services that exceed their expectations. With this
                objective, we aim to earn the reputation of excellence.
              </p>
            </div>
            <div className="about-content-pic">
              <img src={image2}></img>
            </div>
          </div>
          <div className="about-content">
            <div className="about-content-pic">
              <img src={image3}></img>
            </div>
            <div className="about-content-text">
              <h3>Our Vision</h3>
              <p>
                We have provided you with our best services. The purpose of a
                travel agency is to sell transportation and accommodation for
                travel destinations, plan itineraries, and collect payments.
              </p>
            </div>
          </div>
        </div>
      )}
      <br />
    </div>
  );
};

export default Home;
