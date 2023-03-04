import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class HomePreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    let latest_project = (entry.getIn(["data", "project"]) || []).sort((a, b) => a.getIn(["data", "date"]).getTime() > b.getIn(["data", "date"]).getTime()).at(0);
    let latest_post = (entry.getIn(["data", "post"]) || []).sort((a, b) => a.getIn(["data", "date"]).getTime() > b.getIn(["data", "date"]).getTime()).at(0);

    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>

      <div class="bg-off-white pv4">
        <div class="ph3 mw7 center">

          <h2 class="f2 b lh-title mb3">Latest project</h2>

          <div class="w-100 flex-ns mhn1-ns flex-wrap mb3">
            <div class="ph1-ns w-100 flex">
              <a class="no-underline pa3 bg-grey-1 br1 mb2 raise flex w-100">
                <div class="flex flex-column w-70">
                  <h2 class="f3 b lh-title mb1 primary">{ latest_project.getIn(["data", "title"]) }</h2>
                  <p class="mb0">{ latest_project.getIn(["data", "description"]) }</p>
                </div>
                <div class="w-30">
                  <img src={ latest_project.getIn(["data", "image"]) }/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-off-white pv4">
        <div class="ph3 mw7 center">

          <h2 class="f2 b lh-title mb3">Latest post</h2>

          <div class="w-100 flex-ns mhn1-ns flex-wrap mb3">
            <div class="ph1-ns w-100 flex">
              <a class="no-underline pa3 bg-grey-1 br1 mb2 raise flex w-100">
                <div class="flex flex-column w-70">
                  <h2 class="f3 b lh-title mb1 primary">{ latest_post.getIn(["data", "title"]) }</h2>
                  <p class="mb0">{ latest_post.getIn(["data", "description"]) }</p>
                </div>
                <div class="w-30">
                  <img src={ latest_post.Params.getIn(["data", "image"]) }/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}