import React, { useState } from 'react';
import {View ,Text, StyleSheet, ScrollView, SafeAreaView,Image,Pressable,Modal,TextInput,Alert} from 'react-native';
import axios from 'axios';
import MyComponentAlert from '../../components/user/AlertCall';

import myURL from '../../services/myurls';

const AlertSend = ({navigation}) => {


  // user register _id and Role get Here and pass to the post method


    // const [modalVisible, setModalVisible] = useState(false);
    const [disease,Setdisease] = useState('');
    const [prevention,Setprevention] = useState('');
    const [symptoms,Setsymptoms] = useState('');
    const [date, Setdate] = useState('');
    const [time,Settime] = useState('');
    const [country,Setcountry] = useState('');

    const [errormsg ,setErrormsg] = useState(null);
    
    async function senddata(){
      if(!disease || !prevention || !symptoms || !date || !time || !country){
              setErrormsg("Please fillout all the filled !!! ");
      }
      // else if(symptoms.length > 13){
      //     setErrormsg("CNIC should be 13 character long ,No space or Dash  !!! ");
      // }
      // else if(prevention.length > 2)
      // {
      //     setErrormsg("Please Insert the correct Age which should not greater than 100 !!! ");
      // }
      else{
        axios
          .post(myURL+"/admin/alert/", {disease,prevention,symptoms,date,time,country})
          .then((res) => {
          console.log(res.data);
          Alert.alert("SAVE PROFILE");
          ()=>{navigation.navigate("AdminDrawer")}
          
          // {Alert.alert("Hi")}
          })
          .catch((err)=> {
          console.log(err);
          })

      }

    }

    return (  
        <>
                <View style={{flex:1/10,backgroundColor:'#3C7DA3',width:'100%'}}> 
                    <Text style={{color:'white',marginTop:30,fontSize:25,textAlign:'center',fontWeight:'900'}}>
                        News
                    </Text>
                </View>
                    <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <ScrollView style={{width:"100%"}}>

                         <Text style={{alignSelf:'center',fontSize:10,marginTop:20}}>      
                          {
                              errormsg ? (<View style={{backgroundColor:"#C2185B",margin:10}}><Text style={{alignSelf:'center',borderRadius:10,padding:5,color:'white',fontSize:10}}>{errormsg}</Text></View>) : null 
                          }
                         </Text>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Disease</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}} onChangeText={(name)=>{Setdisease(name)}} placeholder='Enter Name'/>
                        
                        {/* {console.log(firstname)} */}

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Prevention</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}} onChangeText={(gender)=>{Setprevention(gender)}}  placeholder="Enter Gender"/>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Symptoms</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}}  onChangeText={(cnic)=>{Setsymptoms(cnic)}}  placeholder="Enter CNIC [without -]"/>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Date</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}}  onChangeText={(age)=>{Setdate(age)}}  placeholder="Enter Age  "/>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Time</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}}  onChangeText={(phone)=>{Settime(phone)}}  placeholder="Enter Phone"/>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Country</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}} onChangeText={(country)=>{Setcountry(country)}}  placeholder="Enter Country"/>
                        {/* <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Images</Text>
                        <TextInput style={styles.input} onChangeText={(country)=>{setcountry(country)}}  placeholder="Enter Image"/> */}


                        <Pressable onPress={ 
                            (e)=>{
                                senddata();
                            }
                         }> 
                            <Text style={{borderRadius:10,alignSelf:'center',color:'white',fontSize:15,marginTop:20,backgroundColor:'#E92424',height:40,width:"60%",textAlign:'center',padding:10,fontWeight:'bold'}}>Profile</Text>
                        </Pressable>
                        {/* <MyComponentAlert /> */}

                        </ScrollView>
                    </View>
                    </View>

        </>
    );
}
 


const styles = StyleSheet.create({
// 
// 
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex:9/10,
    width:'90%',
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    marginTop:20,
    // backgroundColor: 'white',
    borderWidth:2,
    borderColor:"#2196F3",
    padding:15,   
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
    input:{
        backgroundColor:"white",
        width:"90%",
        height:40,
        alignSelf:'center',
        borderRadius:5,
        paddingLeft:10,
        borderWidth:2,
        borderColor:'gray'
    },


})




export default AlertSend;