import { View, Text } from "react-native";
import React from "react";
import History from "./history";
import Order from "./order";
import Checkout from "./checkout";
import QRCodeMomo from "./qr_momo";
import QRCodeZalo from "./qr_zalo";
import QRCodeVN from "./qr_vnpay";

import PaymentMethod from "./payment";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PurchaseStack = createNativeStackNavigator();

export default function Purchase() {
  return (
    <PurchaseStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <PurchaseStack.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
        }}
      />

      <PurchaseStack.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: false,
        }}
      />

      <PurchaseStack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerShown: false,
        }}
      />
      <PurchaseStack.Screen
        name="QRCodeMomo"
        component={QRCodeMomo}
      />
      <PurchaseStack.Screen
        name="QRCodeZalo"
        component={QRCodeZalo}
      />
      <PurchaseStack.Screen
        name="QRCodeVNPay"
        component={QRCodeVN}
      />

      <PurchaseStack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
      />
    </PurchaseStack.Navigator>
  );
}
