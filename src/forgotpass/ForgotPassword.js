import { useState, useEffect } from "react";
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonText1 from "../../components/buttons/button1";
import { IntputField } from "../../components/inputs/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";



export const ForgotPassword = ({ navigation }) => {

  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  let smallCase = false,
      upperCase = false,
      hasNumber = false,
      moreThanEight = false;


  const [warningColorPassword, setwarningColorPassword] = useState("#9D9D9D");
  const [warningColorConfirmPassword, setwarningColorConfirmPassword] = useState("#9D9D9D");

  const [warningPass, setwarningPass] = useState("");
  const [warningConfirmPass, setwarningConfirmPass] = useState("");


  const [passwordValid, setpasswordValid] = useState("false");
  const [confirmpasswordValid, setconfirmpasswordValid] = useState("false");


  useEffect(() => {


    //scanning password if it has small case character
    var lowerCaseLetters = /[a-z]/g;
    if (password.match(lowerCaseLetters)) {
      smallCase = true;
    } else {
      smallCase = false;
    }
    //scanning password if it has upper case character
    var upperCaseLetters = /[A-Z]/g;
    if (password.match(upperCaseLetters)) {
      upperCase = true;
    } else {
      upperCase = false;
    }
    //scanning password if it has a number 
    var numbers = /[0-9]/g;
    if (password.match(numbers)) {
      hasNumber = true;
    } else {
      upperCase = false;
    }
    //scanning password if it has lenght of greater than 7
    if (password.length >= 8) {
      moreThanEight = true;
    } else {
      moreThanEight = false;
    }

    //Validating the password validation to validate the validation of validated password,hahahaha
    if (
      smallCase == true &&
      upperCase == true &&
      hasNumber == true &&
      moreThanEight == true
    ) {
      setpasswordValid("true");
      setwarningPass("Valid Password");
      setwarningColorPassword("green");
    } else if (
      smallCase == false ||
      upperCase == false ||
      hasNumber == false ||
      moreThanEight == false
    ) {
      setwarningColorPassword("red");
      setwarningPass("Invalid Password");
      setpasswordValid("false");
    } else {
      setpasswordValid("false");
      setwarningPass("");
    }

    //if password is empty the whole iteration is back to default
    if (password ==""){
      setwarningPass("");
      setwarningColorPassword("#9D9D9D")
    }
  }, [password]);

  //Function of validation if password is equals to the value of confirm password
  useEffect(() => {
    if (password == confirmpassword && confirmpassword != "") {
      setwarningColorConfirmPassword("green");
      setconfirmpasswordValid("true");
      setwarningConfirmPass("Password Matched");
    } else if (confirmpassword == "") {
      setconfirmpasswordValid("false");
      setwarningColorConfirmPassword("#9D9D9D");
      setwarningConfirmPass("");
    } else {
      setconfirmpasswordValid("false");
      setwarningColorConfirmPassword("red");
      setwarningConfirmPass("Password not match");
    }
  }, [confirmpassword]);




  function SignIn(){
    if (
        passwordValid == "true" &&
        confirmpasswordValid == "true" 
      ) {
        console.log("Login");
        navigation.navigate("Profile");
        

        setpassword("");
        setconfirmpassword("");


        setwarningColorPassword("#9D9D9D");
        setwarningColorConfirmPassword("#9D9D9D");
      } else if (
   
        password == "" ||
        confirmpassword == ""
      ) {
        setwarningColorPassword("red");
        setwarningColorConfirmPassword("red");
      }

      if(passwordValid == "true"){
        setwarningColorPassword("green");
      }if(confirmpasswordValid == "true" ){
        setwarningColorConfirmPassword("green");
      }
  }

  return (
    <KeyboardAwareScrollView>
      
      <View style={styles.container}>

        {/* Form Container */}
        <View style={styles.form}>

          <Text
            style={{
              fontSize: hp(6),
              fontWeight: "bold",
              color: "#454545",
              marginBottom: "10%",
            }}>
            Forgot Password
          </Text>

          

     

          <IntputField
            label="New Password"
            placeholder="New Password"
            onChangeText={setpassword}
            value={password}
            enablePass={true}
            warning={warningPass}
            warningColor={warningColorPassword}/>

          <IntputField
            label="Confirm New Password"
            placeholder="Confirm New Password"
            onChangeText={setconfirmpassword}
            value={confirmpassword}
            enablePass={true}
            warning={warningConfirmPass}
            warningColor={warningColorConfirmPassword}/>

          {/* This container contains the button*/}
          <View style={{ marginTop: "2%" }}>

            {/* Sign Up Button */}
            <ButtonText1
              backgroundColor="#BABBC3"
              text="Sign In"
              onPress={() => {
                    SignIn()
              }}/>
            </View>
            
            
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20%",
         
                bottom:0
              }}>

         

              <Text style={{ fontSize: hp(1.5), color: "#878787", marginTop: "2%" }}>
              RENTZETA
                </Text>

          
            </View>
        </View>
     </View>

    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(105),
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  form: {
    justifyContent: "flex-start",
    marginTop: hp(7),
    width: wp(70),

  },
});