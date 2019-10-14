const Backend = {
  getURL: () => {
    if (process.env && process.env.BACKEND_URL) {
      return process.env.BACKEND_URL;
    } else {
      return "http://localhost:5000";
    }
  }
};

export default Backend;
