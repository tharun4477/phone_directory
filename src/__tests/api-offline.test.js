
import {downloadLocationDetail} from "../customhook";

global.fetch = jest.fn(()=>{

    return Promise.resolve({

        json:()=>Promise.resolve({"city":"mock-city","region":"mock-region","country_name":"mock_country"})
    })
})



test("Location Detail should not be empty for mocked api response",async ()=>{

    const actualResponse = await downloadLocationDetail();
    console.log(actualResponse);
    expect(actualResponse).not.toBeNull();
})
