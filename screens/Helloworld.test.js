import hello from "../utils/helloworld.js"

it("should say Hello Diego",()=>{
    const helloString = hello;
    console.log(helloString);

    exptct (helloString).toBe("Diego");
})