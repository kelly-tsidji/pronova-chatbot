import { useState } from "react";
import { Box, Input, Button, VStack, HStack, Text, IconButton, useClipboard } from "@chakra-ui/react";
import { MdContentCopy } from "react-icons/md";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    // Move useClipboard to the top level
    const { onCopy, setValue } = useClipboard("");

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
            justifyContent="center"
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
                height={messages.length > 0 ? "100vh" : "auto"}
            >
                {/* Message Display */}
                {messages.length > 0 && (
                    <Box 
                        flex="1"
                        overflowY="auto"
                        padding="10px"
                        borderRadius="md"
                    >
                        {messages.map((msg, idx) => (
                            <HStack key={idx} justify={msg.sender === "user" ? "flex-end" : "flex-start"}>
                                <VStack
                                    bg={msg.sender === "user" ? "blue.500" : "gray.300"}
                                    color={msg.sender === "user" ? "white" : "black"}
                                    padding="8px"
                                    borderRadius="md"
                                    position="relative"
                                >
                                    <Text>{msg.text}</Text>

                                    {/* Clipboard Button for Bot Responses */}
                                    {msg.sender === "bot" && (
                                        <IconButton
                                            aria-label="Copy to clipboard"
                                            icon={<MdContentCopy />}
                                            size="xs"
                                            onClick={() => {
                                                setValue(msg.text); // Set clipboard text
                                                onCopy(); // Copy to clipboard
                                            }}
                                        />
                                    )}
                                </VStack>
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
