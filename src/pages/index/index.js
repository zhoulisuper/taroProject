import Taro, { Component } from "@tarojs/taro";
import { View, Button, Input, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
// import { AtButton } from "taro-ui";
import "./index.less";

@inject("counterStore")
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };
  constructor(props) {
    super(props);
    this.state = {
      // 创建一个初始的 Todolist
      list: ["get up", "coding", "sleep"],
      inputVal: ""
    };
  }
  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillRect");
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  addItem() {
    let { list, inputVal } = this.state;
    if (inputVal == "") return;
    list.push(inputVal);
    this.setState({
      list,
      inputVal: ""
    });
  }

  delItem(index) {
    let { list } = this.state;
    list.splice(index, 1);
    this.setState({
      list
    });
  }

  inputHandler(e) {
    this.setState({ inputVal: e.target.value });
  }

  render() {
    let { list, inputVal } = this.state;

    return (
      <View className='index'>
        <Input
          className='input'
          type='text'
          value={inputVal}
          onInput={this.inputHandler.bind(this)}
        />
        <Button className='add' onClick={this.addItem.bind(this)}>
          添加
        </Button>
        <View className='list_wrap'>
          <Text>Todo list</Text>
          {list.map((item, index) => {
            return (
              <View key={index} className='list'>
                <Text>
                  {index + 1}.{item}
                </Text>
                <Button
                  className='del'
                  onClick={this.delItem.bind(this, index)}
                >
                  删除
                </Button>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default Index;
