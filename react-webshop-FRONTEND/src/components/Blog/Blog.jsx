import "./blog.css";
import blogData from "../Database/blogdata";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export function Blog() {
  return (
    <main>
      <div className="blog-heading">
        <div>
          <span>
            <h2>Welcome to our cycling blog </h2>
          </span>
          <span>
            <Icon
              icon="streamline-emojis:bicycle"
              width="3.5em"
              height="3.5em"
            />
          </span>
        </div>
        <div>
          <p>
            A blog for people who <br /> love to ride bike
          </p>
        </div>
      </div>
      <div className="blog-main-container">
        <div className="blog-intro"></div>
        <div className="blog-container">
          <div className="aside-blog">
            <div className="aside-blog-one">
              <div className="blog-one">
                <h3>Scott Bicycles</h3>
                <iframe
                  src={"https://www.scott-sports.com/global/en/sports/bike"}
                  frameborder="0"
                  width={"100%"}
                  height={"350px"}
                ></iframe>
              </div>
            </div>
            <div className="aside-blog-two">
              <div className="blog-two">
                <h4>
                  The differences between the Garmin Edge 530 and Edge 830
                </h4>
                <div>
                  <img
                    src={
                      "https://cdn.mantel.com/images/page?image_id=2565&w=800"
                    }
                    alt=""
                    width={"100%"}
                    height={"350px"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right-blog">
            <div className="back_blog_color">
              {blogData.map(function (blog) {
                return (
                  <div className="blog-card">
                    <div className="image_card">
                      <img src={blog.img} alt="" width="" height="" />
                    </div>
                    <div className="card_info">
                      <div className="card_text">
                        <div className="label luxury">{blog.label}</div>
                        <h4>{blog.title}</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptas necessitatibus quae enim? Voluptatem
                          dolor quis fugit magnam corrupti ex neque veritatis
                          eos reprehenderit perferendis. Omnis, dolorem tempore?
                          Cumque, quis laboriosam...
                        </p>
                      </div>
                      <Link to={`/blog/${blog.id}`}>Read more &rarr;</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
