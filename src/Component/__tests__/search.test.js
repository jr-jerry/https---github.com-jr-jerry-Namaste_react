import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import MOCK_DATA from '../Mocks/restaurantsApiData.json';
import Body from "../Body"
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })}

)

it("Should Load Restaurants :",()=>{
    render(<Body/>)
     const SearchButton=screen.getByText("Search")

     expect(SearchButton).toBeInTheDocument();

})