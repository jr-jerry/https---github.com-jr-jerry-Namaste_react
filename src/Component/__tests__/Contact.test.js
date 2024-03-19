// import {screen,render} from "@testing-library/react";
// import '@testing-library/jest-dom';
// import Contact from "../Contact";

// test("Contact component loaded",()=>{
 
//     render(<Contact/>) // Renders the Contact component for testing
//     const heading=screen.getByRole("heading"); // Fetches the heading element for assertion
//     expect(heading).toBeInTheDocument(); // Asserts that the heading is present in the document

// })
// test("input name render ",()=>{
//         render(<Contact/>) // Renders the Contact component for the second test
//         const input=screen.getByPlaceholderText("Name"); // Fetches the input element by its placeholder text for assertion
//         expect(input).toBeInTheDocument(); // Asserts that the input element is present in the document


// })
// test("all textbox elements ",()=>{
//     render(<Contact/>)
//     const allTextBoxElement=screen.getAllByRole("textbox");//it return a array of all textbox item

//     expect(allTextBoxElement.length).toBe(2);


// })