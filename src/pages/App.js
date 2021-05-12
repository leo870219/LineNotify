import React from "react";
class App extends React.Component {
  oAuth2() {
    var URL = "https://notify-bot.line.me/oauth/authorize?";
    URL += "response_type=code";
    URL += "&client_id=xGdHo4Gm1UxBcg5aOkM3Vd";
    URL += "&redirect_uri=http://localhost:3000/header";
    URL += "&scope=notify";
    URL += "&state=NO_STATE";
    window.location.href = URL;
  }
  /*
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    axios
      .get(proxyurl+"http://localhost:3005/")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  */
  /*componentDidMount() {
    axios({
      method: "get",
      url: "https://test-linenotify-app.herokuapp.com/auth",
      headers: "Access-Control-Allow-Origin:*",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }*/
  render() {
    return (
      <div className="App">
        <button onClick={this.oAuth2}> on</button>
      </div>
    );
  }
}

export default App;
