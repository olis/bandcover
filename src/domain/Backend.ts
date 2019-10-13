const Backend = {
  getURL: () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      return "http://localhost:5000";
    } else {
      return "https://songcover-backend.herokuapp.com";
    }
  }
};

export default Backend;
