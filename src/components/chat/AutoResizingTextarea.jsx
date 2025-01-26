// import { useState, useRef, useEffect } from "react";

// const AutoResizingTextarea = () => {
//     const [input, setInput] = useState("");
//     const textareaRef = useRef(null);

//     const handleChange = (e) => {
//         setInput(e.target.value);
//     };

//     // Adjust the height dynamically
//     useEffect(() => {
//         const textarea = textareaRef.current;

//         if (textarea) {
//             // Reset the height to auto so it shrinks when needed
//             textarea.style.height = "auto";

//             // Calculate and set the height based on the scrollHeight of the textarea
//             // Ensure it doesn't exceed 6 rows
//             const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
//             const maxHeight = lineHeight * 6; // 6 lines max height
//             textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
//         }
//     }, [input]); // Trigger on input change

//     return (
//         <textarea
//             ref={textareaRef}
//             value={input}
//             onChange={handleChange}
//             placeholder="Type something..."
//             rows={1} // Start with 1 line
//             style={{
//                 width: "100%",
//                 minHeight: "1.5em", // Minimum height for 1 line
//                 resize: "none",     // Disable manual resizing
//                 overflow: "hidden", // Hide scrollbars
//                 fontFamily: "Arial, sans-serif", // Optional, choose your font
//             }}
//         />
//     );
// };

// export default AutoResizingTextarea;


import { Textarea } from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";

const AutoResizingTextarea = () => {
    return (
        <Textarea
            as={ResizeTextarea}
            minH="unset"
            overflow="hidden"
            resize="none"
            minRows={1}
            maxRows={6}
            placeholder="Type something..."
        />
    );
};

export default AutoResizingTextarea;
