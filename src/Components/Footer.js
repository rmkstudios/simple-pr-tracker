function Footer({ userID, loading }) {
  return (
    <div className="footer">
      {!userID && !loading ? (
        <>
          <div>Test the site's functionality:</div>
          <div>
            <span className="strong"> email:</span> exampleuser@gmail.com -
            <span className="strong"> password:</span> 123456
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Footer;
