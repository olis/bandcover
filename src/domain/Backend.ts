const Backend = {
  getURL: () => {
    if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
      return "https://songcover-backend.herokuapp.com";
    } else {
      return "http://localhost:5000";
    }
  }
};

export default Backend;
