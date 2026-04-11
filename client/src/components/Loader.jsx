import { useEffect } from "react";

const css = `
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { height: 100%; }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    margin: 0;
    line-height: 1.4;
  }

  .loader-root {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #e6dcdc;
  }

  .box {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e6dcdc;
    width: 100%;
  }

  /* ── cat container ── */
  .cat {
    position: relative;
    width: 100%;
    max-width: 20em;
    overflow: hidden;
    background-color: #e6dcdc;
  }

  .cat::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .cat:hover > * { animation-play-state: paused; }
  .cat:active > * { animation-play-state: running; }

  /* ── shared rotating piece ── */
  .cat__head,
  .cat__tail,
  .cat__body {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: rotating 2.79s cubic-bezier(.65, .54, .12, .93) infinite;
  }

  .cat__head::before,
  .cat__tail::before,
  .cat__body::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 50%;
    background-size: 200%;
    background-repeat: no-repeat;
    background-image: url('https://images.weserv.nl/?url=i.imgur.com/M1raXX3.png&il');
  }

  /* ── head (top-right quadrant) ── */
  .cat__head::before {
    top: 0;
    right: 0;
    background-position: 100% 0%;
    transform-origin: 0% 100%;
    transform: rotate(90deg);
  }

  /* ── tail (bottom-left quadrant) ── */
  .cat__tail {
    animation-delay: .2s;
  }
  .cat__tail::before {
    left: 0;
    bottom: 0;
    background-position: 0% 100%;
    transform-origin: 100% 0%;
    transform: rotate(-30deg);
  }

  /* ── body pieces (bottom-right quadrant) ── */
  .cat__body {
    animation-delay: .1s;
  }
  .cat__body:nth-of-type(2) {
    animation-delay: .2s;
  }
  .cat__body::before {
    right: 0;
    bottom: 0;
    background-position: 100% 100%;
    transform-origin: 0% 0%;
  }

  /* ── keyframes ── */
  @keyframes rotating {
    from { transform: rotate(720deg); }
    to   { transform: none; }
  }

  /* ── blockquote ── */
  .info {
    margin: 0;
    padding: 1em;
    font-size: .9em;
    font-style: italic;
    font-family: serif;
    text-align: right;
    opacity: .5;
  }
  .info a { color: inherit; }
`;

export default function Loader() {
  useEffect(() => {
    const tag = document.createElement("style");
    tag.setAttribute("data-loader-cat", "1");
    tag.innerHTML = css;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);

  return (
    <div className="loader-root">
      <div className="box">
        <div className="cat">
          <div className="cat__body" />
          <div className="cat__body" />
          <div className="cat__tail" />
          <div className="cat__head" />
        </div>
      </div>
      <blockquote className="info">
        {" "}
        <a href="https://dribbble.com/domaso" target="_blank" rel="noreferrer">
          
        </a>
        {" "}
        <a
          href="https://dribbble.com/shots/3197970-Loading-cat"
          target="_blank"
          rel="noreferrer"
        >
          
        </a>
      </blockquote>
    </div>
  );
}









