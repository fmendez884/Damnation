import * as React from "react";
//import { connect } from "react-redux";
import Unity, { UnityContent } from "react-unity-webgl";

type oidc = {
    isLoadingUser?: any;
    user: any;
}

interface Props {
    oidc: oidc;
}

interface State {
    userDisplayLoaded: boolean;
}

class DamnationWebPlayer extends React.Component< any, { userDisplayLoaded: boolean }> {
  
  unityContent = new UnityContent(
    "./Build/damnation-rpg-webgl-build.json",
    "./Build/UnityLoader.js",
    {
      adjustOnWindowResize: true
    
    }
  );
  
  webPlayerWidth = 1000;

    
  
  constructor(props: any) {
    super(props);
      this.sendOidc = this.sendOidc.bind(this);
      console.log(this);
    }

    public state = {
        userDisplayLoaded: false
    };

    public sendOidc(e: any) {
        //debugger;
        //var oidc = JSON.constructor(this.props.oidc)
        var user = JSON.constructor(this.props.user)
        //oidc.user = user
        var profile = JSON.constructor(this.props.user.profile)
        user.profile = profile

        this.unityContent.send(
            "UserNameDisplay",
            "ReceiveOidc",
            JSON.stringify(user)
        );

    }

    componentDidMount() {
        window.addEventListener('userDisplayLoaded', this.sendOidc);
    }

    componentWillUnmount() {
        window.removeEventListener('userDisplayLoaded', this.sendOidc);
    }


  render() {

    // Finally render the Unity component and pass 
    // the Unity content through the props.
      //debugger;
      this.sendOidc(this.props); 

    return (
    
        <div className="WebPlayer" style={{ width: this.webPlayerWidth }}>
            { <Unity unityContent={this.unityContent} />}
        </div> 
      
    );
  }
  
}

function mapStateToProps(state: any) {
    return {
        oidc: state.oidc
    };
};

//export default connect(mapStateToProps)(DamnationWebPlayer);
export default (DamnationWebPlayer);