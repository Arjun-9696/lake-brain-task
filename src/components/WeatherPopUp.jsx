import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Text
} from '@chakra-ui/react'
const WeatherPopUp = ({ cancelRef, isOpen, onClose, searchData, weatherData }) => {
    console.log('searchData:', searchData)
    let description = weatherData ? weatherData[0].description : null
    let main = weatherData ? weatherData[0].main : null
    return (
        <>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            >
                <AlertDialogOverlay />
                <AlertDialogContent borderRadius={"50px"} p={"20px"}>
                    <AlertDialogCloseButton />
                    <AlertDialogBody >
                        <Text fontSize="35px" fontStyle="bold"  color="#275e96">
                            Weather detail
                        </Text>
                        <Text fontSize="25px" fontStyle="bold" >
                           Name: {searchData?.name}
                        </Text>
                        <Text fontSize="25px" fontStyle="bold" >
                           Temperature: {searchData?.main?.temp}
                        </Text>
                        <Text fontSize="25px" fontStyle="bold" >
                           Main : {main}
                        </Text>
                        <Text fontSize="25px" fontStyle="bold" >
                           Description : {description}
                        </Text>
                    </AlertDialogBody>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default WeatherPopUp

