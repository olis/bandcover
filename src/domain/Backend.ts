const Backend = {
  getURL: () => {
    if (process.env && process.env.BACKEND_URL) {
      return process.env.BACKEND_URL;
    } else {
      return "https://songcover-backend.herokuapp.com";
    }
  }
};

export default Backend;
