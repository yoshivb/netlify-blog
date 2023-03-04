import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title, subtitle} = this.props;
    return <div class="pv5 pv6-l ph3 bg-center cover" style={{backgroundImage: `url('${image}')`}}>
    <div class="mw7 center ph3">
      <div class="db mb3">
        <div class="mw7 relative bg-fix-primary mb3">
          <h1 class="f2 f1-l b lh-title mb3 white mw6 tc center bg-blur">
            {title}
          </h1>
        </div>
        <div class="mw7 relative bg-fix-primary">
          {subtitle &&
          <p class="b f4 lh-title mb3 white mw6 tc center bg-blur">
            {subtitle}
          </p>}
        </div>
      </div>
    </div>
  </div>;
  }
}
