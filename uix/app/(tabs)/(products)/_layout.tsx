import React from 'react';
import {Stack} from 'expo-router/stack';

export default function TabProducts () {
    return (
        <Stack>
            <Stack.Screen name='products' options={{title : "products"}} />
        </Stack>
    )
}