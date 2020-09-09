import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts,Oswald_400regular } from '@expo-google-fonts/oswald';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import { AppLoading } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';


export default class App extends React.Component {
  let [fontsLoaded] = useFonts({
    Oswald_400regular,
  });
    if (!fontsLoaded) {
    return <AppLoading />;
  }

  state={
    email:"",
    password:""
  }
  render(){
    return (
      
      <View style={styles.container}>
        <Image style={styles.logoimg} source={require('./img/logoinicio.png')}/>
        <Text style={styles.logo}>Iniciar Sesion</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#ffffff"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Contraseña" 
            placeholderTextColor="#ffffff"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Registrarse</Text>
        </TouchableOpacity>
        

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    fontFamily:'Oswald_400regular',
    color:"#fb5b5a",
    marginBottom:40
  },
  logoimg:{
    height: 175,
    width: 175
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"transparent",
    borderRadius:25,
    borderWidth: 3,
    borderColor: "#ffffff",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
