function Footer({ userID, loading }) {
  return (
    <>
      {!userID && !loading ? (
        <div className="footer">
          <div>Testing the site's functionality?</div>
          <div>
            <span className="strong"> email:</span> exampleuser@gmail.com -
            <span className="strong"> password:</span> 123456
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Footer;
