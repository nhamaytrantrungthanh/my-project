import { Link } from "gatsby";
import * as React from "react";
import useQueryCategories from "../hooks/use-query-categories";
import "../styles/index.scss"
const layout = (props) => {
  const data = useQueryCategories();
  console.log(data);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            {data.allPrismicCategory.nodes?.map((category) => (
              <li key={category.uid}>
                <Link to="/">{category.data.title.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
