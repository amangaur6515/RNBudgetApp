import { View, Text, FlatList,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import {format,subMonths,addMonths, parse} from 'date-fns'
import { useSelector } from 'react-redux';


const BudgetListingScreen = () => {
    const currentDate = new Date();
    const [month, setMonth] = useState(currentDate);
    const selectedMonth = format(month, 'MMMM');
    const budgetList = useSelector(state => state.budget.find(m => m.month === selectedMonth).items);

    useEffect(()=>{
    },[month,budgetList]);

    
    
    const handleLeft = () => {
      const newMonth = subMonths(month, 1);
      setMonth(newMonth);
    }

    const handleRight = () => {
      const newMonth = addMonths(month, 1);
      setMonth(newMonth);
    }

  return (
    <View>
      <View style={styles.monthContainer}>
        <AntDesign name="arrowleft" size={24} color="#3385ff" onPress={handleLeft} />
        <Text style={styles.monthName}>{format(month, 'MMMM')}</Text>
        <AntDesign name="arrowright" size={24} color="#3385ff" onPress={handleRight} />
      
    </View>
    {
      budgetList.length===0?<View style={styles.emptyBudgetListContainer}><Text style={styles.emptyText}>No Items</Text></View>
      :
      <FlatList
      data={budgetList}
      renderItem={({item})=>{
        
        return(
        
          <View key={item.itemName} style={styles.card}>
                <Text style={[styles.cardText,{textAlign:"center",color:"#005ce6",fontWeight:"bold",paddingBottom:12}]}>{item.itemName}</Text>
                <View style={styles.amountHeadingContainer}>
                  <Text style={styles.amountHeading}>Planned Amount</Text>
                  <Text style={styles.amountHeading}>Actual Amount</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={[styles.cardText,{color:"teal"}]}>{String.fromCharCode(8377)}{item.plannedAmount}</Text>
                  <Text style={[styles.cardText,{color:"teal"}]}>{String.fromCharCode(8377)}{item.actualAmount}</Text>
                </View>
                
          </View>
        );
      }}
      
      keyExtractor={(item)=>item.itemName}
      //ItemSeparatorComponent={<Text>No data found</Text>}
      ListHeaderComponent={<Text style={{textAlign:"center",fontWeight:"bold",fontSize:20,color:"green",margin:10}}>Budget List</Text>}
      ListFooterComponent={<View style={{height:100}}></View>}
    /> 
    }
    
    </View>
  )
}

const styles=StyleSheet.create({
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
  },
  card:{
    margin:20,
    padding:20,
    borderWidth:1,
    borderColor:"#005ce6",
    borderRadius:30,
    marginBottom:16,
    backgroundColor:"#cce0ff"
  },
  cardText:{
    fontSize:22,
    
  },
  amountHeadingContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:"space-between",
    paddingHorizontal:5
  },
  amountHeading:{
    fontSize:18,
    fontWeight:"bold",
    color:"teal"
  },
  amountContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:25,

  },
  emptyBudgetListContainer:{
    paddingTop:250,
    alignItems:"center"
    
  },
  emptyText:{
    color:"teal",
    fontSize:40,
    textAlign:'center',
    fontWeight:"bold"
  }
})

export default BudgetListingScreen