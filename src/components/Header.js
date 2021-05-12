import React from "react";
import axios from "axios";
class Header extends React.Component {
  state = {
    access_token: "",
  };

  componentDidMount() {
    const url = window.location.href;
    const queryCode = url.split("?")[1].split("&")[0].split("=")[1];
    console.log(queryCode);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const getTokenUrl = `https://notify-bot.line.me/oauth/token?grant_type=authorization_code&code=${queryCode}&redirect_uri=http://localhost:3000/header&client_id=xGdHo4Gm1UxBcg5aOkM3Vd&client_secret=FNzqlqqIdK15cdWu3R6IWweYymYfyYHnP22NzabX5rR`;
    console.log(proxyurl + getTokenUrl);
    axios
      .post(proxyurl + getTokenUrl)
      .then((response) => {
        this.setState({ access_token: response.data.access_token });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  sendMessage = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const messageUrl = "https://notify-api.line.me/api/notify";

    axios({
      url: proxyurl + messageUrl,
      method: "post",
      params: { message: "訂單已經完成囉" },
      headers: {
        Authorization: `Bearer ${this.state.access_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  /*

 axios({
          method: "POST",
          url: proxyurl + messageUrl,
          header: { Authorization: `Bearer ${response.data.access_token}` },
          data: {
            message: "太扯了",
          },
          json: true,
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });

    axios
      .post("https://cors-anywhere.herokuapp.com/")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  
     
      const url = window.location.href;
    const queryArr1 = url.split("?");
    const queryArr2 = queryArr1[1].split("=");
    console.log(queryArr2[1]);
    axios({
      method: "post",
      url: "https://notify-bot.line.me/oauth/token",
      data: {
        grant_type: "authorization_code",
        code: queryArr2[1],
        redirect_uri: "http://localhost:3000/header",
        client_id: "xGdHo4Gm1UxBcg5aOkM3Vd",
        client_secret: "FNzqlqqIdK15cdWu3R6IWweYymYfyYHnP22NzabX5rR",
      },
    }); 
     */
  render() {
    return (
      <header>
        <button onClick={this.sendMessage}>寄信囉!</button>
      </header>
    );
  }
}

export default Header;
