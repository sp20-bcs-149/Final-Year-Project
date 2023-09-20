import React from 'react';
import { Text,View,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const UserSchedule = ({navigation}) => {
  return (
    <>
            <View style={style.container}>
            <ScrollView style={{width:'100%'}}>
                <View style={{flex:1/10,backgroundColor:'#3C7DA3',width:'100%',flexDirection:'row',justifyContent:'space-between'}}> 
                    <Text style={{color:'white',marginTop:30,marginBottom:10,marginLeft:20,fontSize:25,textAlign:'center',fontWeight:'900'}}>
                        Schedule
                    </Text>
                    <Text style={{color:'white',marginTop:30,marginBottom:10,marginRight:20,fontSize:25,textAlign:'center',fontWeight:'900'}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("ChoseClinic")}}>
                            <MaterialIcons name="library-add" size={30} color="white" />
                        </TouchableOpacity>
                    </Text>

                </View>
                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:"100%",alignItems:'center'}}> 

                    {/* 1 - start */}
                    <View style={{backgroundColor:"#E6EDED",width:"90%",height:200,borderRadius:10,justifyContent:'space-evenly',alignItems:'center',marginTop:20}}>
                        <View style={{width:"100%",justifyContent:'space-around',flexDirection:'row'}}>
                            <Ionicons name='person' size={35} color='black' />
                            <View style={{marginTop:0,}}><Text style={{fontSize:25,fontWeight:'bold'}}>Hepatitis B</Text></View>
                            <View style={{marginTop:8,}}><Text style={{backgroundColor:'#329998',color:'white'}}>Testing Clinic</Text></View>
                        </View>
                        <View style={style.line}></View>
                        <View style={{width:"100%",justifyContent:'space-around',flexDirection:'row'}}>
                            <View><Text style={{fontSize:11,}}>15/10/2023</Text></View>
                            <View><Text style={{fontSize:11,}}>                                        </Text></View>
                            <View><Text style={{fontSize:11,}}>10 : 00 AM</Text></View>
                        </View>
                        <View style={style.line}></View>
                        <View style={{width:"100%",justifyContent:'space-between',flexDirection:'row'}}>
                            <AntDesign name="edit" size={24} color="#3C7DA3" style={{margin:10}}/>
                            <AntDesign name="delete" size={24} color="#FF0000" style={{margin:10}} />                        
                        </View>

                    </View>
                    {/* 1 - end */}
                    

                </View>
                
            </ScrollView>
            </View>
    </>
  )
}

const style = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    }
    ,
    line: {
        height: 1,
        width:'90%',
        backgroundColor: '#B9B0B0', // Set your desired line color
  },
})

export default UserSchedule;