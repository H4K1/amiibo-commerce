const localStorage = {
  saveData: (key, data) => {
    return window.localStorage.setItem(key, JSON.stringify(data));
  },

  getData: (key) => {
    return JSON.parse(window.localStorage.getItem(key)) || []
  }

}

export default localStorage;
