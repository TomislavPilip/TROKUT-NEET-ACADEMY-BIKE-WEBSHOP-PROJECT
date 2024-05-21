import { useParams } from "react-router-dom";
import "./BlogArticle.css";
import { Icon } from "@iconify/react";
import blogData from "../Database/blogdata";

export function BlogArticle() {
  const { id } = useParams();
  const blogPost = blogData.find(function (blog) {
    return blog.id === Number(id);
  });
  return (
    <div className="article-container">
      <div className="heading-container">
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
        <div className="blog-intro-container">
          <div className="blog-intro"></div>
        </div>
      </div>
      <div className="blog-article">
        <h2>{blogPost.title}</h2>
        <div className="first-paragraph paragraph">
          <div>
            <img src={blogPost.image1} alt="" width={"100%"} />
          </div>
          <div>
            <p>{blogPost.contentFirst}</p>
          </div>
        </div>
        <div className="second-paragraph paragraph">
          <div>
            <p>{blogPost.contentSecond}</p>
          </div>
          <div>
            <img src={blogPost.image2} alt="" width={"100%"} />
          </div>
        </div>
        <div className="third-paragraph paragraph">
          <div>
            <img src={blogPost.image3} alt="" width={"100%"} />
          </div>
          <div>
            <p>{blogPost.contentThird}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
