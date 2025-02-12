import { useState } from "react";
import { Box, Input, Button, VStack, HStack, Text } from "@chakra-ui/react";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput("");
            // Simulate bot response
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: "Bot response", sender: "bot" },
                ]);
            }, 1000);
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center" // Always starts centered
            alignItems="center"
            height="100vh"
            padding="10px"
        >
            <Box 
                width="95%" 
                maxWidth="800px" 
                border="1px" 
                borderRadius="md" 
                padding="10px"
                display="flex"
                flexDirection="column"
                height={messages.length > 0 ? "100vh" : "auto"} // Expands when messages appear
            >
                {/* Message Display (Hidden initially) */}
                {messages.length > 0 && (
                    <Box 
                        flex="1" // Pushes input box down
                        overflowY="auto"
                        padding="10px"
                        // border="1px solid #e2e8f0"
                        borderRadius="md"
                    >
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
                )}

                {/* Input and Send Button */}
                <HStack marginTop={messages.length > 0 ? "auto" : "0"}>
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
            </Box>
        </Box>
    );
};

export default Chatbot;
