const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

function getLocation(callback) {
  wx.getLocation({
    success: function (res) {
      callback(true, res.latitude, res.longitude);
    },
    fail: function () {
      callback(false);
    }
  })
}

function getWeatherByLocation(latitude, longitude, callback) {
  var apiKey = "";
  var apiURL = "https://api.darksky.net/forecast/" + apiKey + "/" + latitude + "," + longitude + "?lang=zh&units=ca";

  wx.request({
    url: apiURL,
    success: function (res) {
      var weatherData = parseWeatherData(res.Data);
      getCityName(latitude, longitude, function (city) {
        weatherData.city = city;
        callback(weatherData);
      })
    }
  })
}

function parseWeatherData(data) {
  var weather = {};
  weather["current"] = data.currently;
  weather["daily"] = data.daily;
  return weather;
}