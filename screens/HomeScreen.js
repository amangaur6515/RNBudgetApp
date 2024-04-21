import { View,Text,StyleSheet,TextInput ,Image,Button} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import {format,subMonths,addMonths} from 'date-fns'
import { useState } from "react";
import Toast from 'react-native-toast-message';

const image=require('../assets/budget.jpg')
const HomeScreen = () => { 
    const currentDate = new Date();
    const [month, setMonth] = useState(currentDate);
    const [itemName,setItemName]=useState("");
    const [plannedAmount,setPlannedAmount]=useState("");
    const [actualAmount,setActualAmount]=useState("");

    const handleLeft = () => {
        const newMonth = subMonths(month, 1);
        setMonth(newMonth);
    }

    const handleRight = () => {
        const newMonth = addMonths(month, 1);
        setMonth(newMonth);
    }
    const handleSave=()=>{
        const budget={
            month:format(month,'MMMM'),
            itemName,
            actualAmount,
            plannedAmount
        }
        setItemName("");
        setActualAmount("");
        setPlannedAmount("");
        console.log(budget);
        Toast.show({
            type: 'success',
            text1: 'Item Added Successfully',
            text2: 'Budget Buddy',
            position:"bottom",
            visibilityTime:2500,
            topOffset:100
          });
    }
  return (
    < >
    <View style={styles.monthContainer}>
        <AntDesign name="arrowleft" size={24} color="#3385ff" onPress={handleLeft} />
        <Text style={styles.monthName}>{format(month, 'MMMM')}</Text>
        <AntDesign name="arrowright" size={24} color="#3385ff" onPress={handleRight} />
    </View>
    <View style={styles.container}>
        <View style={styles.form}>
            <Image style={styles.image} source={image} />
            <Text style={styles.label} >Item Name</Text>
            <TextInput style={styles.input} placeholder="Sports, Health, Shopping..." value={itemName} onChangeText={setItemName}/>
            <Text style={styles.label}>Planned Amount</Text>
            <TextInput style={styles.input} placeholder="Ex: 10,000 rs" keyboardType="numeric" value={plannedAmount} onChangeText={setPlannedAmount}/>
            <Text style={styles.label} >Actual Amount</Text>
            <TextInput style={styles.input} placeholder="Ex: 5,000 rs" keyboardType="numeric" value={actualAmount} onChangeText={setActualAmount}/>
            <Button title='Save' onPress={handleSave}/> 
        </View>
    </View>
    </>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"white",
        
    },
    form:{
        backgroundColor:"white",
        padding:20,
        marginHorizontal:20,
        borderWidth:1,
        borderColor:"black",
        borderRadius:10,
        shadowOffset:{
        width:0,
        height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5 
    },
    label:{
        fontSize:16,
        marginBottom:5,
        fontWeight:'bold'
    },
    input:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        height:35,
        padding:10,
        marginBottom:10
    },
    image:{
        width:'100%',
        height:100,
        marginBottom: 10
    },
    monthContainer:{
        backgroundColor:"white",
        margin:10,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10,
    },
    monthName:{
        fontSize:24,
        fontWeight:"bold",
        color:"#3385ff"
    }

})

export default HomeScreen
