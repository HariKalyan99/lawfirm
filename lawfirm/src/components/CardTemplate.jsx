import React from "react";
import styles from "./CardTemplate.module.css";
import Avatar from "@mui/material/Avatar";

const CardTemplate = () => {
  return (
    <div className={styles.card}>
      <Avatar
        alt="Travis Howard"
        src=""
        sx={{ width: 101, height: 101, backgroundColor: "var(--color-badge)" }}
      >
        <svg
          width="52"
          height="50"
          viewBox="0 0 52 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Gift 1">
            <g id="Union">
              <path
                d="M33.4634 2.6416L27.9834 8.12168C27.158 8.94707 26.2852 10.0322 26 11.0834C25.7148 10.0322 25.2472 8.9471 24.4218 8.12172L18.9417 2.64164C16.4196 0.1195 12.3304 0.1195 9.80827 2.64164C7.53327 4.91664 7.4021 8.55847 9.23128 11.0833L26 11.0834L6.625 11.0834C3.05817 11.0834 0.166672 13.9749 0.166672 17.5417C0.166672 19.3019 0.870838 20.8976 2.01283 22.0625H25.9875L26 22.0625L26.0125 22.0625H49.9872C51.1292 20.8976 51.8333 19.3019 51.8333 17.5417C51.8333 13.9749 48.9418 11.0834 45.375 11.0834L42.5969 11.0834L43.2657 11.0833C45.0949 8.55847 44.8719 4.91661 42.5969 2.6416C40.0748 0.119466 35.9856 0.119466 33.4634 2.6416Z"
                fill="#232222"
              />
              <path
                d="M2.70104 26.1587L2.69304 25.8457H24.0625V49.7415H22.125C16.1066 49.7415 13.0974 49.7415 10.7237 48.7115C7.55874 47.3381 5.04421 44.7038 3.73324 41.3882C2.7501 38.9016 2.7501 35.7479 2.7501 29.444C2.7501 28.0622 2.7234 27.026 2.70104 26.1587Z"
                fill="#232222"
              />
              <path
                d="M41.2763 48.7115C38.9026 49.7415 35.8934 49.7415 29.875 49.7415H27.9375V25.8457H49.2354C49.25 26.7761 49.25 27.8921 49.25 29.4439C49.25 35.7489 49.25 38.9014 48.2668 41.3882C46.9558 44.7038 44.4413 47.3381 41.2763 48.7115Z"
                fill="#232222"
              />
            </g>
          </g>
        </svg>
      </Avatar>
      <h1>success rate</h1>
      <p>
      Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.
      </p>
      <button className={styles.readMoreButton}>
        ReadMOre
      </button>
    </div>
  );
};

export default CardTemplate;