import React, { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Stack, InputGroup, Input, InputRightElement, Box, Card, CardBody, Text, useDisclosure } from '@chakra-ui/react'
import "./search.css"
import axios from 'axios'
import WeatherPopUp from './WeatherPopUp'
const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [weatherData, setWeatherData] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const handleSearch = (text) => {
        setSearchText(text)
    }
    
    const handleQuery = async () => {
        let APIkey = "840de593b7028de6e424162454790fe5"
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=${APIkey}`);
            setSearchData(response.data)
            setWeatherData(response.data.weather)
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    const handleEnter = (e) => {
        if (e.key == "Enter") {
            handleQuery()
            onOpen()
        }
    }

    return (
        <>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "centre" }}>
                <Stack spacing={4} marginTop="20%"  >
                    <InputGroup >
                        <Input borderRadius={"50px"} value={searchText} onKeyPress={(e) => handleEnter(e)} placeholder='Search..' onChange={(e) => handleSearch(e.target.value)} backgroundColor="white" w={"300px"} boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" />
                        <InputRightElement>
                            <SearchIcon color='#69c2c5' />
                        </InputRightElement>
                    </InputGroup>
                </Stack>
            </Box>
            <Box>
                <WeatherPopUp onClose={onClose} onOpen={onOpen} cancelRef={cancelRef} isOpen={isOpen} searchData={searchData} weatherData={weatherData} />
            </Box>
        </>
    )
}

export default Search