import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import UserList from '../components/userList'
import SubmitMenu from '../components/SubmitMenu'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Stormy Humble Echidna</title>
          <meta property="og:title" content="Stormy Humble Echidna" />
        </Head>
        <header data-role="Header" className="home-header">
          <a
            href="https://www.coeurway.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <img
              alt="logo"
              src="/playground_assets/636bf66b029010d4d1280b56_cw.svg"
              className="home-image"
            />
          </a>
          <div className="home-btn-group">
            <Link href="/videoask">
              <a className="home-link1 button">
                <span>
                  <span>
                    Ça commence ici 
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>-&gt;</span>
                  <br></br>
                </span>
              </a>
            </Link>
          </div>
        </header>
        <div className="home-hero">
          <div className="home-container1">
            <div className="home-container2">
              <h1 className="home-text4">
                <span>La santé sans paperasse</span>
                <br></br>
              </h1>
            </div>
            <div className="home-btn-group1">
              <Link href="/videoask">
                <a className="home-link2 button">-&gt;</a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/636bace0bfd4d83afa592898_ui-021-1500h.png"
            className="home-image1"
          />
        </div>
        <div>
      <UserList />
      <SubmitMenu />
      </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #e6e0fc;
          }
          .home-header {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-image {
            height: 2rem;
            text-decoration: none;
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link1 {
            align-self: center;
            transition: 0.3s;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: var(--dl-radius-radius-radius8);
            border-bottom-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-link1:hover {
            color: #ffffff;
            background-color: #000000;
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            z-index: 100;
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-container2 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text4 {
            font-size: 3rem;
            max-width: 450px;
          }
          .home-btn-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link2 {
            padding: var(--dl-space-space-unit);
            transition: 0.3s;
            border-radius: var(--dl-radius-radius-round);
            text-decoration: none;
            border-top-left-radius: var(--dl-radius-radius-round);
          }
          .home-link2:hover {
            color: #000000;
            z-index: 100;
            background-color: #ff4c00;
          }
          .home-image1 {
            width: 400px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-container2 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text4 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-btn-group {
              display: none;
            }
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image1 {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group1 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
