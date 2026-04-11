
import React from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');

  .notfound-wrapper {
    background-color: #FF7F2E;
    font-family: 'Concert One', cursive;
    margin: 0;
    overflow: hidden;
    padding: 0;
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  /* ---- text ---- */
  .nf-text {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    color: rgba(19,36,44,0.1);
    font-size: 30em;
    text-align: center;
  }

  /* ---- container ---- */
  .nf-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 300px;
    width: 500px;
  }
  .nf-container::after {
    content: "";
    position: absolute;
    background-color: rgba(19,36,44,0.1);
    border-radius: 12px;
    bottom: 40px;
    height: 12px;
    left: 80px;
    width: 350px;
    z-index: -1;
    animation: shadow-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
    animation-delay: 0.1s;
  }

  /* ---- caveman base ---- */
  .nf-caveman {
    height: 300px;
    position: absolute;
    width: 250px;
  }
  .nf-caveman:nth-child(1) { right: 20px; }
  .nf-caveman:nth-child(2) { left: 20px; transform: rotateY(180deg); }

  /* ---- head ---- */
  .nf-head {
    position: absolute;
    background-color: #13242C;
    border-radius: 50px;
    height: 140px;
    left: 60px;
    top: 25px;
    width: 65px;
  }
  .nf-head::after, .nf-head::before {
    content: "";
    position: absolute;
    background-color: #13242C;
    border-radius: 10px;
    height: 20px;
    width: 7px;
  }
  .nf-head::after  { left: 35px; top: -8px; transform: rotate(20deg); }
  .nf-head::before { left: 30px; top: -8px; transform: rotate(-20deg); }

  .nf-caveman:nth-child(2) .nf-head {
    animation: head-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
  }
  .nf-caveman:nth-child(1) .nf-head {
    animation: head-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
    animation-delay: 0.6s;
  }

 
  .nf-eye {
    position: absolute;
    background-color: #EAB08C;
    border-radius: 50px;
    height: 16px;
    left: 45%;
    top: 40px;
    transform: translateX(-50%);
    width: 48px;
  }
  .nf-eye::after, .nf-eye::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #13242C;
    border-radius: 50%;
    height: 5px;
    width: 5px;
  }
  .nf-eye::after  { left: 5px; }
  .nf-eye::before { right: 9px; }

  .nf-caveman:nth-child(2) .nf-eye::after,
  .nf-caveman:nth-child(2) .nf-eye::before {
    animation: eye-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
  }
  .nf-caveman:nth-child(1) .nf-eye::after,
  .nf-caveman:nth-child(1) .nf-eye::before {
    animation: eye-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
    animation-delay: 0.6s;
  }

  /* ---- nose ---- */
  .nf-nose {
    position: absolute;
    left: 45%;
    top: 12px;
    transform: translate(-50%, -50%);
    background-color: #D9766C;
    border-left: 8px solid rgba(19,36,44,0.1);
    border-radius: 10px;
    box-sizing: border-box;
    height: 35px;
    width: 15px;
  }

  /* ---- shape / body ---- */
  .nf-shape {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    height: 140px;
    overflow: hidden;
    top: 70px;
    width: 140px;
  }
  .nf-caveman:nth-child(1) .nf-shape { background-color: #D13433; }
  .nf-caveman:nth-child(2) .nf-shape { background-color: #932422; }

  .nf-circle {
    position: absolute;
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }
  .nf-circle::after, .nf-circle::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    height: 20px;
    width: 20px;
  }
  .nf-circle:nth-child(1) { left: -12px; top: 80px; }
  .nf-circle:nth-child(1)::after  { left: 50px; top: 10px; }
  .nf-circle:nth-child(1)::before { left: 60px; top: 45px; }
  .nf-circle:nth-child(2) { right: 10px; top: 0px; transform: rotate(90deg); }
  .nf-circle:nth-child(2)::after  { left: 65px; top: 10px; }
  .nf-circle:nth-child(2)::before { display: none; }

  .nf-caveman:nth-child(1) .nf-circle,
  .nf-caveman:nth-child(1) .nf-circle::after,
  .nf-caveman:nth-child(1) .nf-circle::before { background-color: #932422; }

  .nf-caveman:nth-child(2) .nf-circle,
  .nf-caveman:nth-child(2) .nf-circle::after,
  .nf-caveman:nth-child(2) .nf-circle::before { background-color: #D13433; }

  /* ---- arm ---- */
  .nf-arm-right {
    position: absolute;
    background-color: #EAB08C;
    border-left: 8px solid rgba(19,36,44,0.1);
    border-radius: 50px;
    box-sizing: border-box;
    height: 180px;
    left: 135px;
    top: 80px;
    transform-origin: 30px 30px;
    width: 60px;
    z-index: 1;
  }
  .nf-caveman:nth-child(1) .nf-arm-right {
    animation: arm-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
  }
  .nf-caveman:nth-child(2) .nf-arm-right {
    animation: arm-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
    animation-delay: 0.6s;
  }

  /* ---- club ---- */
  .nf-club {
    position: absolute;
    border-bottom: 110px solid #601513;
    border-left:   10px solid transparent;
    border-right:  10px solid transparent;
    height: 0;
    left: -60px;
    top: 120px;
    transform: rotate(70deg);
    width: 20px;
  }
  .nf-club::after, .nf-club::before {
    position: absolute;
    content: "";
    background-color: #601513;
    border-radius: 50%;
    left: 0;
  }
  .nf-club::after  { height: 20px; width: 20px; top: -10px; }
  .nf-club::before { height: 40px; width: 40px; left: -10px; top: 90px; }

  /* ---- legs ---- */
  .nf-leg {
    position: absolute;
    border-radius: 10px;
    height: 55px;
    top: 200px;
    width: 10px;
  }
  .nf-leg::after {
    position: absolute;
    content: "";
    border-radius: 50%;
    height: 10px;
    left: -5px;
    top: 15px;
    width: 10px;
  }
  .nf-leg:nth-child(1) { background-color: #B2524D; left: 95px; }
  .nf-leg:nth-child(1)::after { background-color: #B2524D; }
  .nf-leg:nth-child(2) { background-color: #D9766C; left: 115px; }
  .nf-leg:nth-child(2)::after { background-color: #D9766C; }

  /* ---- foot ---- */
  .nf-foot {
    position: absolute;
    border-radius: 25px 25px 0 0;
    height: 25px;
    left: -38px;
    top: 30px;
    width: 50px;
  }
  .nf-leg:nth-child(1) .nf-foot { background-color: #B2524D; }
  .nf-leg:nth-child(2) .nf-foot { background-color: #D9766C; }

  .nf-foot::after, .nf-foot::before {
    position: absolute;
    content: "";
    background-color: #EAB08C;
    border-radius: 50%;
    bottom: 0px;
    height: 15px;
    transform-origin: bottom;
    width: 15px;
  }
  .nf-foot::after  { left: -6px; }
  .nf-leg:nth-child(1) .nf-foot::after { background-color: #B2524D; }
  .nf-foot::before { left: 8px; transform: scale(0.6); }
  .nf-leg:nth-child(1) .nf-foot::before { display: none; }

  .nf-fingers {
    position: absolute;
    background-color: #EAB08C;
    border-radius: 50%;
    bottom: 0px;
    height: 15px;
    left: 15px;
    transform: scale(0.6);
    transform-origin: bottom;
    width: 15px;
  }
  .nf-fingers::after {
    position: absolute;
    content: "";
    background-color: #EAB08C;
    border-radius: 50%;
    bottom: 0px;
    height: 15px;
    left: 11px;
    width: 15px;
  }

  /* ---- animations ---- */
  @keyframes arm-anima {
    0%   { transform: rotate(0); }
    100% { transform: rotate(-360deg); }
  }
  @keyframes head-anima {
    0%   { top: 25px; }
    42%  { top: 25px; }
    45%  { top: 50px; }
    100% { top: 25px; }
  }
  @keyframes eye-anima {
    0%   { height: 5px; }
    42%  { height: 5px; }
    45%  { height: 1px; }
    100% { height: 5px; }
  }
  @keyframes shadow-anima {
    0%   { width: 350px; left: 80px; }
    25%  { width: 450px; left: 80px; }
    50%  { width: 350px; left: 80px; }
    75%  { width: 450px; left: 0px; }
    100% { width: 350px; left: 80px; }
  }

  /* ---- credit link ---- */
  .nf-credit {
    bottom: 20px;
    color: #000;
    opacity: 0.2;
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-decoration: none;
  }
  .nf-credit:hover { opacity: 1; }
  .nf-credit p { margin: 0; margin-left: 5px; }
`;

const Caveman = ({ delay }) => (
  <div className="nf-caveman">
    <div className="nf-leg">
      <div className="nf-foot"><div className="nf-fingers"></div></div>
    </div>
    <div className="nf-leg">
      <div className="nf-foot"><div className="nf-fingers"></div></div>
    </div>
    <div className="nf-shape">
      <div className="nf-circle"></div>
      <div className="nf-circle"></div>
    </div>
    <div className="nf-head">
      <div className="nf-eye">
        <div className="nf-nose"></div>
      </div>
    </div>
    <div className="nf-arm-right">
      <div className="nf-club"></div>
    </div>
  </div>
);

const NotFound = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="notfound-wrapper">
        <div className="nf-text"><p>404</p></div>
        <div className="nf-container">
          <Caveman />
          <Caveman />
        </div>
        <a
          href="https://codepen.io/SofiaSergio/"
          target="_blank"
          rel="noreferrer"
          className="nf-credit"
        >
          <p>Original design by SofiaSergio on CodePen</p>
        </a>
      </div>
    </>
  );
};

export default NotFound;
