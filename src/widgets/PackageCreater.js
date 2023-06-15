import { React, useState } from "react"
import CustomInputfield from "../shared/customInputfield/CustomInputfield"
import BaseButton from "../shared/baseButton/BaseButton"

const PackageCreater = () => {
    const [dependencies, setDependencies] = useState([])
    return (
        <>
            <div className='flex flex-col items-center space-y-4 mt-14'>
                <CustomInputfield
                    label='Name'
                    styles={{ width: "300px" }}
                />
                <CustomInputfield
                    label='Version'
                    styles={{ width: "300px" }}
                />
                <CustomInputfield
                    label='Target'
                    styles={{ width: "300px" }}
                />
                <h1 className=''>Dependencies</h1>
                {dependencies.map((item, index) => (
                    <div className="flex items-center justify-center space-x-4 ">
                        <p>{index+1} :</p>
                        <CustomInputfield
                        label="Name"
                        styles={{ width: "200px" }}
                    />
                    <CustomInputfield
                        label="Version"
                        styles={{ width: "200px" }}
                    />
                    <BaseButton label='✖' onClickAction={() => setDependencies(dependencies.filter(element => item !== element))}/>
                    </div>
                ))}
                <BaseButton label='+' onClickAction={() => setDependencies([...dependencies, dependencies.length+1])}/>
                <BaseButton
                    label='Submit'
                    styles={{ width: "300px" }}
                />
            </div>
        </>
    )
}

export default PackageCreater
