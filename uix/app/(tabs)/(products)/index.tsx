import React from 'react';
import { Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function Products(){
    return (
            <SafeAreaProvider>
                <SafeAreaView >
                    <Text>Products</Text>
                </SafeAreaView>
            </SafeAreaProvider>
            
    )
}