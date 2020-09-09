export default class App extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        username: '',
        password: '',
      };
    }
    
    onLogin() {
      const { username, password } = this.state;
  
      Alert.alert('Credentials', `${username} + ${password}`);
    }
  
    render() {
      return (
        <View style={styles.container}>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />
          
          <Button
            title={'Login'}
            style={styles.input}
            onPress={this.onLogin.bind(this)}
          />
        </View>
      );
    }
  }