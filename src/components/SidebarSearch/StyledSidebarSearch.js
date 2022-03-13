import styled from "styled-components";
import { FaSearch } from "react-icons/fa";


export const NavSearch = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
  color: white;
  height: 3rem;
  width: 16rem;
  border-radius: 20px;
  padding-right: 10px;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  color: black;
  padding-left: 1rem;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(FaSearch)`
  margin: 8px 0 0 12px;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;
