import { useState } from "react";
import { Box, Input, Button, VStack, HStack, Text, Textarea } from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input , setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput("");
            // Simulate bot response for now
            setTimeout(() => {
                setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Bot response", sender: "bot" },
                ]);
            }, 1000);
        }
    };

    return (
        <Box width="95%" maxWidth="800px" margin="auto" padding="10px" border="1px" borderRadius="md">
            <VStack spacing={4} align="stretch">
                {/* Messages Display */}
                <Box maxHeight="300px" overflowY="scroll" padding="10px" border="1px solid #e2e8f0" borderRadius="md">
                    {messages.map((msg, idx) => (
                    <HStack key={idx} justify={msg.sender === "user" ? "flex-end" : "flex-start"}>
                        <Box
                            bg={msg.sender === "user" ? "blue.500" : "gray.300"}
                            color={msg.sender === "user" ? "white" : "black"}
                            padding="8px"
                            borderRadius="md"
                        >
                            <Text>{msg.text}</Text>
                        </Box>
                    </HStack>
                    ))}
                </Box>

                {/* Input and Send Button */}
                <HStack>
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                        size="md"
                        borderRadius="md"
                    />
                    <Button onClick={handleSend} colorScheme="blue">
                        Send
                    </Button>
                </HStack>

                <Textarea
                    placeholder="Type additional notes..."
                    size="md"
                    resize="none"
                />

                <Textarea
                    as={ResizeTextarea}
                    placeholder="Type additional notes edit..."
                    minH="unset"
                    overflow="hidden"
                    resize="none"
                    minRows={1}
                    maxRows={6}
                    size="md"
                    w="100%"
                />


            </VStack>
        </Box>
    );

};

export default Chatbot;
