// Imports
import Head from 'next/head';

// Homepage for our cards and entry point to application
export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>MSS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/**This contains our general HTML structure */}
    <main>
      <h1 className="title">
        Welcome to{' '}
        <a href="https://github.com/carlmontemayor/mss">
          MSS - Microservice Simulation
        </a>
      </h1>

      <div className="grid">
        <a
          href="https://github.com/carlmontemayor/mss/blob/main/mss/DOCUMENTATION.md"
          className="card"
        >
          <h3>Documentation &rarr;</h3>
          <p>Find the documentation for the code.</p>
        </a>

        <a
          href="https://github.com/carlmontemayor/mss/blob/main/mss/REPORT.md"
          className="card"
        >
          <h3>Report &rarr;</h3>
          <p>Read our report regarding our CPE 400 project.</p>
        </a>

        <a
          href="https://github.com/carlmontemayor/mss/blob/main/mss/PROBLEM_STATEMENT.md"
          className="card"
        >
          <h3>Problem Statement &rarr;</h3>
          <p>Read our project description + goals to understand the project.</p>
        </a>

        <a href="https://github.com/carlmontemayor/mss" className="card">
          <h3>Github Repo &rarr;</h3>
          <p>Checkout our repository and our repository here.</p>
        </a>

        <a href="/graph" className="card">
          <h3>Simulation &rarr;</h3>
          <p>Test our simulation by clicking this card.</p>
        </a>
      </div>
    </main>

    <footer>
      Made by Curtis Chung + Carl Montemayor w/ ❤️ <br /> CPE 400 - Dynamic
      Routing in a Faulty Network
    </footer>

    {/** Basic stylings */}
    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      .logo {
        height: 1em;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
