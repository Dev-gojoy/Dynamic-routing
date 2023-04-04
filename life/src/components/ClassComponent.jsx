import { Component } from "react";

class ClassComponent extends Component {
  render() {
    return <div className="bg-yellow-100 h-80">ClassComponent</div>;
  }
}

// ClassComponent는 Component의 기능을 가지고 있고 Component는 ComponentLifecycle 기능을 모두 포함 => ClassComponent는 다 가지고 있다

export default ClassComponent;
