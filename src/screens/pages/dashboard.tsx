import React from "react";
import {
  ScrollView,
  Pressable,
  View,
  Text,
  KeyboardAvoidingView,
  FlatList,
  Dimensions,
  Alert,
} from "react-native";



export default function BussinessInfo({ navigation }) {

  const vegetable = [
    {
      name: "Seller display name | FPO",
      date: "13 Sep 2022",
      address: "Manchar, Pune",
      product: "Jeera | Cumin Seed",
      description:
        "Avail. Qty: 30000 Kg | Offer Rate: ₹ 32/Kg Min Qty: 10000 Kg | Transport: By Seller",
    },
    {
      name: "Seller display name | FPO",
      date: "13 Sep 2022",
      address: "Manchar, Pune",
      product: "Jeera | Cumin Seed",
      description:
        "Avail. Qty: 30000 Kg | Offer Rate: ₹ 32/Kg Min Qty: 10000 Kg | Transport: By Seller",
    },
    {
      name: "Seller display name | FPO",
      date: "13 Sep 2022",
      address: "Manchar, Pune",
      product: "Jeera | Cumin Seed",
      description:
        "Avail. Qty: 30000 Kg | Offer Rate: ₹ 32/Kg Min Qty: 10000 Kg | Transport: By Seller",
    },
    {
      name: "Seller display name | FPO",
      date: "13 Sep 2022",
      address: "Manchar, Pune",
      product: "Jeera | Cumin Seed",
      description:
        "Avail. Qty: 30000 Kg | Offer Rate: ₹ 32/Kg Min Qty: 10000 Kg | Transport: By Seller",
    },
    {
      name: "Seller display name | FPO",
      date: "13 Sep 2022",
      address: "Manchar, Pune",
      product: "Jeera | Cumin Seed",
      description:
        "Avail. Qty: 30000 Kg | Offer Rate: ₹ 32/Kg Min Qty: 10000 Kg | Transport: By Seller",
    },
    {
      name: "Seller display name | FPO",
      date: "13 Sep 2022",
      address: "Manchar, Pune",
      product: "Jeera | Cumin Seed",
      description:
        "Avail. Qty: 30000 Kg | Offer Rate: ₹ 32/Kg Min Qty: 10000 Kg | Transport: By Seller",
    },
    {
      name: "Seller display name | FPO",
      date: "13 Sep 2022",
      address: "Manchar, Pune",
      product: "Jeera | Cumin Seed",
      description:
        "Avail. Qty: 30000 Kg | Offer Rate: ₹ 32/Kg Min Qty: 10000 Kg | Transport: By Seller",
    },
  ];

  const vegetablelist = ({ item }) => (
    <Pressable
      style={{
        width: "93%",
        alignSelf: "center",
        elevation: 10,
        marginTop: 15,
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#EBEBEB",
      }}
    >
      <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
        <Text
          style={{
            flex: 0.78,
            color: "#000000",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            flex: 0.22,
            color: "rgba(0, 0, 0, 0.4)",
            fontSize: 11,
            fontWeight: "normal",
          }}
        >
          {item.date}
        </Text>
      </View>
      <Text
        style={{
          flex: 1,
          marginTop: 5,
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: 12,
          fontWeight: "normal",
        }}
      >
        {item.address}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text
          style={{
            flex: 0.8,
            color: "#000000",
            fontSize: 14,
            fontWeight: "normal",
          }}
        >
          {item.product}
        </Text>
        <Pressable
        onPress={()=> alert("Buy Succesfully")}
          style={{
            paddingHorizontal: 5,
            paddingVertical: 5,
            flex: 0.15,
            borderWidth: 1,
            borderColor: "#1DCD6E",
            borderRadius: 22,
          }}
        >
          <Text
            style={{
              color: "#1DCD6E",
              alignSelf: "center",
              fontSize: 12,
              fontWeight: "normal",
            }}
          >
            Buy
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            flex: 0.8,
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: 11,
            fontWeight: "normal",
          }}
        >
          {item.description}
        </Text>
        <Pressable
        onPress={()=> alert("Reply to Seller")}
          style={{
            paddingHorizontal: 5,
            paddingVertical: 5,
            flex: 0.15,
            marginVertical: 5,
            borderWidth: 1,
            borderColor: "#1DADCD",
            borderRadius: 22,
          }}
        >
          <Text
            style={{
              color: "#1DADCD",
              alignSelf: "center",
              fontSize: 12,
              fontWeight: "normal",
            }}
          >
            Reply
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0}
          contentContainerStyle={{
            marginLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
          }}
          data={vegetable}
          renderItem={vegetablelist}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
