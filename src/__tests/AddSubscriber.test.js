/*
@jest-environment jsdom
*/
import Enzyme,{mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16"
import { TextValidator } from "react-material-ui-form-validator";
import AddSubscriber from "../AddSubscriber";
import React from "react";
import {useHistory,Link} from "react-router-dom";
import {useLocationDetail} from "../customhook";

Enzyme.configure({adapter:new Adapter()});

jest.mock("react-router-dom", ()=>({
    useHistory:jest.fn(()=>({push:jest.fn()})),
    Link: jest.fn(({childern,props})=>(<a href={props}>{childern}</a>)),
}))

jest.mock("../customhook", ()=>({useLocationDetail: jest.fn(()=>({"city":"mock-city","region":"mock-region","country_name":"mock_country"}))}))

test("test", ()=>{
    const container= mount(<AddSubscriber/>);
    console.log(container.html());
    const len= container.find(TextValidator).length;
    expect(len).toBe(2);
})