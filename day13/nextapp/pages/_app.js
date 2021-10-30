import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <style jsx global>{`
        input {
          border: solid 3px #eee;
          padding: 10px;
          fontsize: 24px;
        }
      `}</style>
    </>
  );
}

export default MyApp;
