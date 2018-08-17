// eslint:disable
import React from "react";

const { Consumer, Provider } = React.createContext({});

class StoreProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      get: key => this.state[key].value,
      set: (key, value) =>
        this.setState({
          [key]: Object.assign({}, this.state[key], { value })
        }),
      loading: {
        get: () => this.state.get("loading"),
        set: value => this.state.set("loading", value),
        value: {
          currentProject: "neo-project",
          fetch: "repo"
        }
      },
      project: {
        get: () => this.state.get("project"),
        set: value => this.state.set("project", value),
        value: "neo-project"
      },
      repos: {
        get: () => this.state.get("repos"),
        set: value => this.state.set("repos", value),
        value: "neo-project"
      }
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

const injectStore = Component => props => (
  <Consumer>{context => <Component store={context} {...props} />}</Consumer>
);

export { injectStore, StoreProvider };
